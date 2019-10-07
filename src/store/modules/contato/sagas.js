import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  getContactSuccess,
  getContactFailure,
  updateContactSuccess,
  updateContactFailure,
  deleteFieldSuccess,
  deleteFieldFailure,
} from './actions';

export function* getContact({ payload }) {
  const { id } = payload;

  try {
    const { data } = yield call(api.get, `contacts/${id}`);
    yield put(getContactSuccess(data));
  } catch (error) {
    toast.error('Erro ao buscar o contato');
    yield put(getContactFailure());
  }
}

export function* updateContact({ payload }) {
  const { id } = payload;

  try {
    const { data } = yield call(api.put, `contacts/${id}`, payload);
    yield put(updateContactSuccess(data));
    yield toast.success('Contato atualizado');
  } catch (error) {
    toast.error('Erro ao atualizar contato');
    yield put(updateContactFailure());
  }
}

export function* deleteField({ payload }) {
  const { id } = payload;

  try {
    if (id) {
      yield call(api.delete, `/contactField/${id}`);
    }

    toast.success('Campo deletado');
    yield put(deleteFieldSuccess());
  } catch (error) {
    toast.error('Erro ao atualizar contato');
    yield put(deleteFieldFailure());
  }
}

export default all([
  takeLatest('@contact/GET_CONTACT_REQUEST', getContact),
  takeLatest('@contact/UPDATE_CONTACT_REQUEST', updateContact),
  takeLatest('@contact/DELETE_FIELD_REQUEST', deleteField),
]);
