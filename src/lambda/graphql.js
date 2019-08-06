import { DatabaseManager } from '@accounts/database-manager'
import { AccountsModule } from '@accounts/graphql-api'
import MongoDBInterface from '@accounts/mongo'
import { AccountsPassword } from '@accounts/password'
import { AccountsServer } from '@accounts/server'
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit'
import db from './server'
import initialState from '../components/requests'
import {
  GraphQLDate,
  GraphQLDateTime
} from 'graphql-iso-date'
const {
  ApolloServer,
  gql,
  makeExecutableSchema
} = require('apollo-server-lambda')

const runHandler = (event, context, handler) => (
  new Promise((resolve, reject) => {
    const callback = (error, body) => (error ? reject(error) : resolve(body))

    handler(event, context, callback)
  }))

const run = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  // Build a storage for storing users
  const userStorage = new MongoDBInterface(db)
  // Create database manager (create user, find users, sessions etc) for accounts-js
  const accountsDb = new DatabaseManager({
    sessionStorage: userStorage,
    userStorage
  })

  const accountsPassword = new AccountsPassword({
    // This option is called when a new user create an account
    // Inside we can apply our logic to validate the user fields
    validateNewUser: user => {
      // For example we can allow only some kind of emails
      if (user.email.endsWith('.xyz')) {
        throw new Error('Invalid email')
      }
      return user
    }
  })

  // Create accounts server that holds a lower level of all accounts operations
  const accountsServer = new AccountsServer(
    { db: accountsDb, tokenSecret: 'davidissilly' },
    {
      password: accountsPassword
    }
  )

  // Creates resolvers, type definitions, and schema directives used by accounts-js
  const accountsGraphQL = AccountsModule.forRoot({
    accountsServer
  })
  const typeDefs = gql`
    scalar Date
    scalar DateTime
    type PrivateType @auth {
      field: String
    }
    # Our custom fields to add to the user
    extend input CreateUserInput {
      profile: CreateUserProfileInput!
    }
    input EventInput {
      title: String!
      start: DateTime!
      end: DateTime!
      salesman: String!
      amount: Float!
    }
    input CreateUserProfileInput {
      firstName: String!
      lastName: String!
    }
    type Query {
      hello: String
      testing: String
      getRequest(id: Int!): Request
      getRequests: [Request]
      publicField: String
      privateField: String @auth
      privateType: PrivateType
    }
    type Mutation {
      addEvent(event: EventInput!): String
    }
    type Request {
      id: Int
      title: String
      start: DateTime
      end: DateTime
      salesman: String
      amount: String
      status: String
      customers: [String]
    }
  `

  const resolvers = {
    Date: GraphQLDate,
    DateTime: GraphQLDateTime,
    Query: {
      hello: () => 'Hello world!',
      testing: () => {
        return 'testing'
      },
      getRequest: (obj, args, context) => {
        const result = initialState.filter(result => result.id === args.id)[0]
        return result
      },
      getRequests: () => {
        return initialState
      },
      publicField: () => 'public',
      privateField: () => 'private',
      privateType: () => ({
        field: () => 'private'
      })
    },
    Mutation: {
      addEvent: () => {
        return 'testing'
      }
    }
  }

  const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([typeDefs, accountsGraphQL.typeDefs]),
    resolvers: mergeResolvers([accountsGraphQL.resolvers, resolvers]),
    schemaDirectives: {
      ...accountsGraphQL.schemaDirectives
    }
  })

  // Create the Apollo Server that takes a schema and configures internal stuff
  const server = new ApolloServer({
    context: accountsGraphQL.context,
    schema,
    introspection: true, // enables introspection of the schema
    playground: true // enables the actual playground
  })
  const handler = server.createHandler({ cors: { credentials: true, origin: '*' } })
  const response = await runHandler(event, context, handler)

  return response
}

exports.handler = run
