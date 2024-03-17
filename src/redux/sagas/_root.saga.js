import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import symptomSaga from './symptoms.saga';
import userSymptomsSaga from './user.symptoms.saga';

// Bundle all Sagas and export to index.js
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    symptomSaga(),
    userSymptomsSaga(),
  ]);
}
