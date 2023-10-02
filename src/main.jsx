import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import App from './App.jsx'
import './index.css'

const spaceId = 'd3eed91ea9mm';
const accessToken = 'QozhKR-ysYxnDxKi42Qwl_s-M4q5SuXQ6oPeC1VTRr0';

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <App />
  </ApolloHooksProvider>
</ApolloProvider>
)
