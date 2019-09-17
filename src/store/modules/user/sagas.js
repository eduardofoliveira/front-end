import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { nome, email, ...rest } = payload.data;

    if (!rest.senha) {
      delete rest.senha;
    }

    const profile = Object.assign(
      {
        nome,
        email,
      },
      rest
    );

    const response = yield call(api.put, 'users/1/2', profile);

    toast.success('Perfil atualizado com sucesso !');
    yield put(updateProfileSuccess(response.data));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao atualizar perfil, confira seus dados !');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
