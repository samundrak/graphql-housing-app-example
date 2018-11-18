import gql from 'graphql-tag';

export default gql`
  query($active: Boolean = true, $location: String) {
    apartments(active: $active, location: $location) {
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
