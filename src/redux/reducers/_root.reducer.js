import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import symptomsReducer from './symptoms.reducer';

// Bundle all of the reducers and export them
const rootReducer = combineReducers({
  errors,
  user,
  symptomsReducer,
});

export default rootReducer;
