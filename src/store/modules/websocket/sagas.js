import { takeLatest, put, all, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  receiveCallSuccess,
  receiveCallFailure,
  openTicketsSuccess,
  openTicketsFailure,
} from './actions';

export function* receiveCall({ payload }) {
  try {
    const ticket = payload.data;

    yield put(receiveCallSuccess(ticket));
    toast.warn('Chamada recebida !');
  } catch (error) {
    toast.error('Erro ao receber requisição websocket !');
    yield put(receiveCallFailure());
  }
}

export function* searchIDs() {
  try {
    const { data } = yield call(api.get, 'tickets/opens');
    yield put(openTicketsSuccess(data));
  } catch (error) {
    toast.error('Erro ao atualizar tickets abertos !');
    yield put(openTicketsFailure());
  }
}

export default all([
  takeLatest('@websocket/RECEIVE_CALL_REQUEST', receiveCall),
  takeLatest('@websocket/OPEN_TICKET_REQUEST', searchIDs),
]);
