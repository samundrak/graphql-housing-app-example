import gql from 'graphql-tag';

export default gql`
  query($active: Boolean = true) {
    locations(active: $active) {
      total
      items {
        title
        _id
      }
    }
  }
`;
