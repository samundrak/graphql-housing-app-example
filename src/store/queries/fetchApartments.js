import gql from 'graphql-tag';

export default gql`
  {
    apartments(active: true) {
      items {
        _id
        owner {
          _id
          email
        }
        title
        location {
          title
        }
        size
        price
        amenities
        images
      }
    }
  }
`;
