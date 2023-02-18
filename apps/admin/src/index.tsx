import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { theme } from './theme';
import App from './App';
import { REACT_APP_GRAPHQL_URL } from './utils/config';

const httpLink = createHttpLink({
  uri: `${REACT_APP_GRAPHQL_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('ACCESS_TOKEN');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (
        message === 'Invalid authorization token' ||
        message === 'Forbidden resource'
      ) {
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('EMAIL');
        (
          window as Window
        ).location = `${window.location.protocol}//${window.location.host}/login`;
      }
    });
  }
});

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    ,
  </ApolloProvider>,
  document.getElementById('root')
);
