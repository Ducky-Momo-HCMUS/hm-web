import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { REACT_APP_GRAPHQL_URL } from './utils/config';

const httpLink = createUploadLink({
  headers: { 'Apollo-Require-Preflight': 'true' },
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

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
