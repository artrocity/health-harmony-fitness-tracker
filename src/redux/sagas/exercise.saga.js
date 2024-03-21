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

// Watcher Sagas
function* exerciseSaga() {
  yield takeEvery('FETCH_USER_EXERCISE', fetchUserExercise);
}

export default exerciseSaga;
