import { FETCH_LOCATIONS, FETCH_APARTMENTS_LIST } from './types';
import client from '../../ApolloClient';
import fetchLocationsQueries from '../queries/fetchLocations';
import fetchApartments from '../queries/fetchApartments';

export const fetchLocationsList = () => (dispatch) => {
  client
    .query({
      query: fetchLocationsQueries,
    })
    .then((locations) =>
      dispatch({
        type: FETCH_LOCATIONS,
        payload: locations.data,
      })
    );
};

export const fetchApartmentByLocation = (locationId) => (dispatch) => {
  client
    .query({
      query: fetchApartments,
      variables: {
        location: locationId,
      },
    })
    .then((locations) =>
      dispatch({
        type: FETCH_APARTMENTS_LIST,
        payload: locations.data,
      })
    );
};
