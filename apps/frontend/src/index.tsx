import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import { theme } from './theme';
import { client } from './ApolloClient';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

export { client };
