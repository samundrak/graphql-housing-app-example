import { FETCH_APARTMENT } from './types';
import client from '../../ApolloClient';
import fetchApartmentQuery from '../queries/fetchApartment';

export const fetchApartment = (_id) => (dispatch) => {
  client
    .query({
      query: fetchApartmentQuery,
      variables: { id: _id },
    })
    .then((apartment) =>
      dispatch({
        type: FETCH_APARTMENT,
        payload: apartment.data,
      }),
    );
};
