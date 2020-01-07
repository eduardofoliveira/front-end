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
  addContactSuccess,
  addContactFailure,
  loadCustomParamSuccess,
  loadCustomParamFailure,
} from './actions';
import { clear } from '../websocket/actions';

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
    yield put(clear());
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

export function* contactAddRequest({ payload }) {
  const { contact } = payload;

  try {
    const { data } = yield call(api.post, 'contacts', contact);
    yield put(addContactSuccess(data));
  } catch (error) {
    if (error.response.data.error) {
      yield put(addContactFailure(error.response.data.error));
    } else {
      yield put(addContactFailure('Erro ao adicionar contato'));
    }
  }
}

export function* contactAddSuccess({ payload }) {
  const { contact } = payload;
  yield toast.success(`Contato adicionado com id: ${contact.id}`);
  yield put(clear());
}

export function* contactAddFailure({ payload }) {
  const { error } = payload;
  yield toast.error(error);
}

export function* loadCustomParams({ payload }) {
  try {
    const { id } = payload;

    const { data } = yield call(api.get, `templatefields/${id}`);
    yield put(loadCustomParamSuccess(data));
  } catch (error) {
    yield put(loadCustomParamFailure());
  }
}

export default all([
  takeLatest('@contact/GET_CONTACT_REQUEST', getContact),
  takeLatest('@contact/UPDATE_CONTACT_REQUEST', updateContact),
  takeLatest('@contact/DELETE_FIELD_REQUEST', deleteField),
  takeLatest('@contact/ADD_CONTACT_REQUEST', contactAddRequest),
  takeLatest('@contact/ADD_CONTACT_SUCCESS', contactAddSuccess),
  takeLatest('@contact/ADD_CONTACT_FAILURE', contactAddFailure),
  takeLatest('@contact/LOAD_CUSTOM_PARAM_REQUEST', loadCustomParams),
]);
