import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  listUsersSuccess,
  listUsersFailure,
  getUserDetailSuccess,
  getUserDetailFailure,
} from './actions';

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

export function* getUserDetails({ payload }) {
  try {
    const { id, id_dominio } = payload.data;

    const response = yield call(api.get, `users/${id_dominio}/${id}`);
    const user = response.data;

    yield put(getUserDetailSuccess(user));
  } catch (error) {
    toast.error('Erro ao buscar dados do usuário !');
    yield put(getUserDetailFailure());
  }
}

export default all([
  takeLatest('@usuarios/LIST_USERS_REQUEST', listUsers),
  takeLatest('@usuarios/GET_USER_DETAIL_REQUEST', getUserDetails),
]);
