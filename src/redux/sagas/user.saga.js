import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// Worker Sagas
function* fetchUser() {
  try {
    // Include server credentials to recognize user - if logged in return credentials
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/user', config);

    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* updateUser(action) {
  try {
    yield axios.put('/api/user/update', action.payload);
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('User update failed', error);
  }
}

// Watcher Saga
function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeEvery('UPDATE_USER_INFO', updateUser);
}

export default userSaga;
