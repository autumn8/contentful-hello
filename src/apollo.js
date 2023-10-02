// apollo.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const CONTENTFUL_SPACE_ID = 'd3eed91ea9mm';
const CONTENTFUL_ACCCESS_TOKEN = 'YObXpXs2GETENdJRfzavPR3i6CgZxBuQuwEqXd2CDG8';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({    
    uri: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    headers: {
      Authorization: `Bearer ${CONTENTFUL_ACCCESS_TOKEN}`,
    },
  }),
});

export default client;
