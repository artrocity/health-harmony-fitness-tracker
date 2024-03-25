import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Sagas
function* addFood(action) {
  try {
    yield axios.post('/api/food', action.payload);
    yield put({ type: 'FETCH_FOOD' });
  } catch (error) {
    console.log('ERROR ADDING FOOD - SAGA: ', error);
  }
}

// Watcher Saga
function* foodSaga() {
  yield takeEvery('FETCH_FOOD', fetchFood);
  yield takeEvery('ADD_FOOD', addFood);
}

export default foodSaga;
