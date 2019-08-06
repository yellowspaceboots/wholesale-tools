import React, { Suspense, useState } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Splash from './components/Splash'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Layout from './components/Layout'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { AccountsClient } from '@accounts/client'
import { accountsLink } from '@accounts/apollo-link'
import { AccountsClientPassword } from '@accounts/client-password'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5169a5',
      main: '#1e3f76',
      dark: '#001a4a',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ffed73',
      main: '#ffbb41',
      dark: '#c88b00',
      contrastText: '#000000'
    }
  }
})

const accountsClient = () => new AccountsClient({}, { client: 'graphql' })
export const accountsPassword = new AccountsClientPassword(accountsClient)
const authLink = accountsLink(accountsClient)
/*
const authMiddleware = setContext(async (req, { headers }) => {
  const accountsClient = await accountsClientFactory()
  const token = await accountsClient.getTokens()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})
*/
const httpLink = new HttpLink({
  uri: '/.netlify/functions/graphql',
  credentials: 'same-origin'
})

const cache = new InMemoryCache()

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
    authLink,
    httpLink
  ]),
  cache
})

const App = () => {
  const [loggedIn, login] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <Router>
              <CssBaseline />
              <Suspense fallback={<div>Loading...</div>}>
                { loggedIn ? <Layout login={login} /> : <Splash login={login} /> }
              </Suspense>
            </Router>
          </ApolloHooksProvider>
        </ApolloProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
