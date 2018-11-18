import ApolloClient from 'apollo-boost/lib/index';

// const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  // cache,
});

export default client;
