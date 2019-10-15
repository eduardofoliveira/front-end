import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import moment from 'moment';

import history from '~/services/history';
import api from '~/services/api';
import {
  getTicketSuccess,
  getTicketFailure,
  updateTicketSuccess,
  updateTicketFailure,
} from './actions';
import { removeTicketOpen, showNextOpen } from '../websocket/actions';

export function* getTicket({ payload }) {
  const { id } = payload;

  try {
    const { data: ticket } = yield call(api.get, `tickets/${id}`);
    if (ticket.aberto === 0) {
      ticket.aberto = 2;
    }
    ticket.inicio = moment(ticket.inicio).format('DD/MM/YYYY HH:mm:ss');
    ticket.termino = moment(ticket.termino).format('DD/MM/YYYY HH:mm:ss');
    yield put(getTicketSuccess(ticket));
  } catch (error) {
    toast.error('Falha ao buscar Ticket');
    yield put(getTicketFailure());
  }
}

export function* updateTicket({ payload }) {
  const { id, aberto, comentario } = payload.data;

  try {
    const { data: ticket } = yield call(api.put, `tickets/${id}`, {
      aberto,
      comentario,
    });
    yield put(updateTicketSuccess(ticket));
    toast.success('Ticket atualizado com sucesso');
    history.push('/chamados');
  } catch (error) {
    toast.error('Falha ao atualizar Ticket');
    yield put(updateTicketFailure());
  }
}

export function* updateTicketDashboard({ payload }) {
  const { id, aberto, comentario } = payload.data;

  try {
    const { data: ticket } = yield call(api.put, `tickets/${id}`, {
      aberto,
      comentario,
    });
    yield put(removeTicketOpen(ticket.id));
    yield put(showNextOpen());
    toast.success('Ticket atualizado com sucesso');
  } catch (error) {
    toast.error('Falha ao atualizar Ticket');
    yield put(updateTicketFailure());
  }
}

export default all([
  takeLatest('@ticket/GET_TICKET_REQUEST', getTicket),
  takeLatest('@ticket/UPDATE_TICKET_REQUEST', updateTicket),
  takeLatest('@ticket/UPDATE_TICKET_REQUEST_DASHBOARD', updateTicketDashboard),
]);
