import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  listUsersSuccess,
  listUsersFailure,
  getUserDetailSuccess,
  getUserDetailFailure,
  userUpdatelSuccess,
  userUpdateFailure,
  addUserSuccess,
  addUserFailure,
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

export function* updateUser({ payload }) {
  try {
    const { user, id, id_dominio } = payload.data;

    if (!user.senha) {
      delete user.senha;
    }

    const response = yield call(api.put, `users/${id_dominio}/${id}`, user);

    yield put(userUpdatelSuccess(response.data));
    toast.success('Usuário atualizado com sucesso !');
    history.push('/usuarios');
  } catch (error) {
    toast.error('Erro ao atualizar usuário !');
    yield put(userUpdateFailure());
  }
}

export function* addUser({ payload }) {
  try {
    const { user, id_dominio } = payload;

    const response = yield call(api.post, `users/${id_dominio}`, user);

    yield put(addUserSuccess(response.data));
    toast.success('Usuário adicionado com sucesso !');
    history.push('/usuarios');
  } catch (error) {
    toast.error('Erro ao adicionar usuário !');
    yield put(addUserFailure());
  }
}

export default all([
  takeLatest('@usuarios/LIST_USERS_REQUEST', listUsers),
  takeLatest('@usuarios/GET_USER_DETAIL_REQUEST', getUserDetails),
  takeLatest('@usuarios/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@usuarios/ADD_USER_REQUEST', addUser),
]);
