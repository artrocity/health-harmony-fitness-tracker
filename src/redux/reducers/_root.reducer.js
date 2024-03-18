import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import symptoms from './symptoms.reducer';
import userSymptoms from './user.symptom.reducer';
import userWeight from './weight.reducer';

// Bundle all of the reducers and export them
const rootReducer = combineReducers({
  errors,
  user,
  symptoms,
  userSymptoms,
  userWeight,
});

export default rootReducer;
