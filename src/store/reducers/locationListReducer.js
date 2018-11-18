import { FETCH_LOCATIONS, FETCH_APARTMENTS_LIST } from '../actions/types';

const initialState = {
  locations: {
    total: 0,
    items: [],
  },
  apartments: {
    total: 0,
    items: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
      };
    case FETCH_APARTMENTS_LIST:
      return {
        ...state,
        apartments: action.payload.apartments,
      };
    default:
      return state;
  }
};
