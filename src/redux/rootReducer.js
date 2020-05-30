import { combineReducers } from 'redux';
import contactSlice from './contactReducer/contactSlice';
import filterSlice from './filterReducer/filterSlice';
import isLoadingSlice from './isLoadingReducer/isLoadingSlice';
import errorSlice from './errorReducer/errorSlice';

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  error: errorSlice.reducer,
});

export default rootReducer;
