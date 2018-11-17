import ApolloClient, { InMemoryCache } from 'apollo-boost/lib/index';

const cache = new InMemoryCache();

console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT);
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache,
});

export default client;
