import React from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_ARTICLES = gql`
  query {
    articleCollection {
      items {
        title
      }
    }
  }
`;

function ArticleList() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data.articleCollection.items;

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;