import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql/'
});

const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
