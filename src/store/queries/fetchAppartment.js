import gql from 'graphql-tag';

export default gql`
  query($id: String!) {
    apartment(_id: $id) {
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
      images
      amenities
      details {
        rooms
        bedrooms
        floor
        bathrooms
      }
      services
    }
  }
`;
