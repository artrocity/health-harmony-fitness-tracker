import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Sagas
function* fetchUserExercise(action) {
  try {
    const response = yield axios.get(`/api/exercise/${action.payload}`);
    yield put({ type: 'SET_USER_EXERCISE', payload: response.data });
  } catch (error) {
    console.log('ERROR IN THE FETCH USER EXERCISE SAGA: ', error);
  }
}

function* addUserExercise(action) {
  try {
    yield axios.post('/api/exercise', action.payload);
  } catch (error) {
    console.log('ERROR IN ADD EXERCISE SAGA: ', error);
  }
}

// Watcher Sagas
function* exerciseSaga() {
  yield takeEvery('FETCH_USER_EXERCISE', fetchUserExercise);
  yield takeEvery('ADD_USER_EXERCISE', addUserExercise);
}

export default exerciseSaga;
