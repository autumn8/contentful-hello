// App.js
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import ArticleList from './ArticeList';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ArticleList />
      </div>
    </ApolloProvider>
  );
}

export default App;
