import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Moment from 'moment';

import api from '~/services/api';
import {
  changeTicketsTypeSuccess,
  changeTicketsTypeFailure,
  showTicketsSuccess,
  showTicketsFailure,
  changeTicketsUserSuccess,
  changeTicketsUserFailure,
} from './actions';

export function* alterarVisualizacao({ payload }) {
  const visualizacao = payload.data;

  try {
    yield put(changeTicketsTypeSuccess(visualizacao));
  } catch (error) {
    yield put(changeTicketsTypeFailure());
  }
}

export function* listTickets({ payload }) {
  const { proto, de, para } = payload.data;
  let { inicio, termino } = payload.data;

  inicio = Moment(inicio)
    .add(3, 'hours')
    .format('YYYY-MM-DD HH:mm:ss');
  termino = Moment(termino)
    .add(3, 'hours')
    .format('YYYY-MM-DD HH:mm:ss');

  const { visualizacao, visualizacaoUser } = yield select(
    state => state.tickets
  );

  try {
    const response = yield call(api.get, 'tickets', {
      params: {
        visualizacao,
        visualizacaoUser,
        proto,
        de,
        para,
        inicio,
        termino,
      },
    });

    yield put(showTicketsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao buscar os chamados !');
    yield put(showTicketsFailure());
  }
}

export function* alterarVisualizacaoUser({ payload }) {
  const visualizacaoUser = payload.data;

  try {
    yield put(changeTicketsUserSuccess(visualizacaoUser));
  } catch (error) {
    yield put(changeTicketsUserFailure());
  }
}

export default all([
  takeLatest('@tickets/CHANGE_TICKETS_TYPE_REQUEST', alterarVisualizacao),
  takeLatest('@tickets/LIST_TICKETS_REQUEST', listTickets),
  takeLatest('@tickets/CHANGE_TICKETS_USER_REQUEST', alterarVisualizacaoUser),
]);
