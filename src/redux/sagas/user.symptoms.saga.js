import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Worker Saga
function* fetchUserSymptoms(action) {
  try {
    const response = yield axios.get(`/api/symptoms/${action.payload}`);
    yield put({ type: 'SET_USER_SYMPTOMS', payload: response.data });
  } catch (error) {
    console.log('Error Fetching user specific symptoms: ', error);
  }
}

// Watcher Saga
function* userSymptomsSaga() {
  yield takeEvery('FETCH_USER_SYMPTOMS', fetchUserSymptoms);
}

export default userSymptomsSaga;
