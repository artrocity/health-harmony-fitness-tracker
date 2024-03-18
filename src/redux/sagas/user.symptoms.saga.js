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

function* addSymptom(action) {
  try {
    yield axios.post('/api/symptoms', action.payload);
    yield put({ type: 'FETCH_USER_SYMPTOMS', payload: action.payload.user_id });
  } catch (error) {
    console.log('ERROR ADDING SYMPTOM - SAGA: ', error);
  }
}

function* deleteSymptom(action) {
  try {
    console.log('Action PAYLOAD: ', action.payload);
    yield axios.delete(`api/symptoms/delete/${action.payload.id}`);
    yield put({ type: 'FETCH_USER_SYMPTOMS', payload: action.payload.user_id });
  } catch (error) {
    console.error('ERROR DELETING SYMPTOM - SAGA: ', error);
  }
}

// Watcher Saga
function* userSymptomsSaga() {
  yield takeEvery('FETCH_USER_SYMPTOMS', fetchUserSymptoms);
  yield takeEvery('ADD_SYMPTOM', addSymptom);
  yield takeEvery('DELETE_SYMPTOM', deleteSymptom);
}

export default userSymptomsSaga;
