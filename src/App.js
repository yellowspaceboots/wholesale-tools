import React, { Suspense } from 'react'
import logo from './logo.svg'
import './App.css'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider, useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: '/.netlify/functions/graphql',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
})

const GET_HELLO_WORLD = gql`
  {
    hello
  }
`
const HelloWorld = () => {
  const { data: { hello }, error } = useQuery(GET_HELLO_WORLD, { suspend: true })
  if (error) {
    return <div>Error! {error.message}</div>
  };
  return (
    <p>{hello}</p>
  )
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <Suspense fallback={<div>Loading...</div>}>
              <HelloWorld />
            </Suspense>
          </header>
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
