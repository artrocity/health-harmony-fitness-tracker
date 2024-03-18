// Import 3rd party libraries
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Worker Sagas
function* fetchUserWeight(action) {
  try {
    // Payload should be the user ID
    const response = yield axios.get(`/api/weight/${action.payload}`);
    put({ type: 'SET_USER_WEIGHT', payload: response.data });
  } catch (error) {
    console.log('ERROR FETCHING USER WEIGHT - SAGA : ', error);
  }
}

// Watcher Saga
function* weightSaga() {
  yield takeEvery('FETCH_USER_WEIGHT', fetchUserWeight);
}

// Export Default
export default weightSaga;
