// Import 3rd Party Libraries
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Saga
function* fetchSymptoms() {
  try {
    const response = yield axios.get('/api/symptoms');
    console.log('RESPONSE DATA: ', response.data);
    yield put({ type: 'SET_SYMPTOMS', payload: response.data });
  } catch (error) {
    console.log('ERROR DURING THE SAGA REDUCER: ', error);
  }
}

// Watcher Sagas
function* symptomSaga() {
  yield takeEvery('FETCH_SYMPTOMS', fetchSymptoms);
}

export default symptomSaga;
