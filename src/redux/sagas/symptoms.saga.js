// Import 3rd Party Libraries
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Saga
function* fetchSymptoms() {
  try {
    const response = yield axios.get('/api/symptoms');
    yield put({ type: 'SET_SYMPTOMS', payload: response.data });
  } catch (error) {
    console.log('ERROR DURING THE SAGA REDUCER: ', error);
  }
}

function* addSymptom(action) {
  try {
    console.log('ACTION PAYLOAD: ', action.payload);
    yield axios.post('/api/symptoms', action.payload);
    yield put({ type: 'FETCH_SYMPTOMS' });
  } catch (error) {
    console.log('ERROR ADDING SYMPTOM - SAGA: ', error);
  }
}

// Watcher Sagas
function* symptomSaga() {
  yield takeEvery('FETCH_SYMPTOMS', fetchSymptoms);
  yield takeEvery('ADD_SYMPTOM', addSymptom);
}

export default symptomSaga;
