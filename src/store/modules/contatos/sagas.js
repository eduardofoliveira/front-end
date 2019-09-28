import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { getContactsSuccess, getContactsFailure } from './actions';

export function* getContacts() {
  try {
    const { data } = yield call(api.get, 'contacts');
    yield put(getContactsSuccess(data));
  } catch (error) {
    toast.error('Erro ao buscar a lista de contatos');
    yield put(getContactsFailure());
  }
}

export default all([takeLatest('@contacts/GET_CONTACTS_REQUEST', getContacts)]);
