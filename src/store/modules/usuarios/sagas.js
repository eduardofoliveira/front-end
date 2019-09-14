import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { listUsersSuccess, listUsersFailure } from './actions';

export function* listUsers({ payload }) {
  try {
    const { id_dominio } = payload.data;

    const response = yield call(api.get, `users/${id_dominio}`);
    const users = response.data;

    yield put(listUsersSuccess(users));
  } catch (error) {
    toast.error('Erro ao buscar os usuarios !');
    yield put(listUsersFailure());
  }
}

export default all([takeLatest('@usuarios/LIST_USERS_REQUEST', listUsers)]);
