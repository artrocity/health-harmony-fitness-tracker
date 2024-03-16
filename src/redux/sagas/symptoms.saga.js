// Import 3rd Party Libraries
import 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Saga
function* fetchSymptoms() {
  const response = yield axios.get('/api/symptoms');

  yield put({ type: 'FETCH_SYMPTOMS', payload: response.data });
}

// Watcher Sagas
function* symptomSaga() {
  yield takeEvery('FETCH_SYMPTOMS', fetchSymptoms);
}

export default symptomSaga;
