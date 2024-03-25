import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Worker Sagas
function* fetchFood(action) {
  try {
    const response = yield axios.get(`/api/food/${action.payload}`);
    yield put({ type: 'SET_FOOD', payload: response.data });
  } catch (error) {
    console.log('ERROR FETCHING FOOD - SAGA: ', error);
  }
}

function* addFood(action) {
  try {
    yield axios.post('/api/food', action.payload);
    yield put({ type: 'FETCH_FOOD', payload: action.payload.user_id });
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
