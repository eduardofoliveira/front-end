import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import usuarios from './usuarios/sagas';
import tickets from './tickets/sagas';

export default function* rootSaga() {
  return yield all([auth, user, usuarios, tickets]);
}
