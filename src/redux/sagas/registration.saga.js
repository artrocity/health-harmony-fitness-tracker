import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes user registration information to the server
    yield axios.post('/api/user/register', action.payload);

    const username = action.payload.username;
    const password = action.payload.plain_password;

    const loginInfo = {
      username: username,
      password: password,
    };

    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: loginInfo });

    // set to 'login' mode so they see the login screen
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
}

export default registrationSaga;
