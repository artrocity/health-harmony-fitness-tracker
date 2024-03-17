import { takeEvery, put } from 'redux-saga/effects';

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
  takeEvery('FETCH_USER_SYMPTOMS', fetchUserSymptoms);
}

export default userSymptomsSaga;
