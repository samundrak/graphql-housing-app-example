import { FETCH_APARTMENTS_LIST } from './types';
import client from '../../ApolloClient';
import fetchAppartmentsQuery from '../queries/fetchApartments';

export const fetchApartmentsList = () => (dispatch) => {
  client
    .query({
      query: fetchAppartmentsQuery,
    })
    .then((apartments) =>
      dispatch({
        type: FETCH_APARTMENTS_LIST,
        payload: apartments.data,
      }),
    );
};
