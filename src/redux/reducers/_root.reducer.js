import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// Bundle all of the reducers and export them
const rootReducer = combineReducers({
  errors,
  user,
});

export default rootReducer;
