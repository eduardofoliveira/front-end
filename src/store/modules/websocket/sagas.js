import { takeLatest, put, all, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  receiveCallSuccess,
  receiveCallFailure,
  openTicketsSuccess,
  openTicketsFailure,
  checkOpenTicketsSuccess,
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

export function* refreshOpenTickets() {
  try {
    const { data } = yield call(api.get, 'tickets/open');
    yield put(checkOpenTicketsSuccess(data));
  } catch (error) {
    toast.error('Erro ao sincronizar tickets abertos !');
  }
}

export default all([
  takeLatest('@websocket/RECEIVE_CALL_REQUEST', receiveCall),
  takeLatest('@websocket/OPEN_TICKET_REQUEST', searchIDs),
  takeLatest('@websocket/CHECK_OPEN_TICKETS_REQUEST', refreshOpenTickets),
]);
