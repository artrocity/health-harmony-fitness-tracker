// Import 3rd party libraries
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Worker Sagas
function* fetchUserWeight(action) {
  try {
    // Payload should be the user ID
    const response = yield axios.get(`/api/weight/${action.payload}`);
    yield put({ type: 'SET_USER_WEIGHT', payload: response.data });
  } catch (error) {
    console.log('ERROR FETCHING USER WEIGHT - SAGA : ', error);
  }
}

function* addWeight(action) {
  try {
    // Payload will include: date, weight, user_id
    yield axios.post('/api/weight', action.payload);
  } catch (error) {
    console.log('ERROR ADDING WEIGHT - SAGA: ', error);
  }
}

// Watcher Saga
function* weightSaga() {
  yield takeEvery('FETCH_USER_WEIGHT', fetchUserWeight);
  yield takeEvery('ADD_WEIGHT', addWeight);
}

// Export Default
export default weightSaga;
