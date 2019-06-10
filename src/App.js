import React, { Suspense } from 'react'
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
    },
    background: {
      default: '#ffffff'
    }
  }
})

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <CssBaseline />
          <Suspense fallback={<div>Loading...</div>}>
            <Splash />
          </Suspense>
        </ApolloHooksProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
