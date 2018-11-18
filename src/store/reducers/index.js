import { combineReducers } from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import apartmentReducer from './apartmentReducer';
import locationListReducer from './locationListReducer';

export default combineReducers({
  apartmentsList: apartmentsListReducer,
  apartmentItem: apartmentReducer,
  locationList: locationListReducer,
});
