import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  changeTicketsTypeSuccess,
  changeTicketsTypeFailure,
  showTicketsSuccess,
  showTicketsFailure,
} from './actions';

export function* alterarVisualizacao({ payload }) {
  const visualizacao = payload.data;

  try {
    yield put(changeTicketsTypeSuccess(visualizacao));
  } catch (error) {
    yield put(changeTicketsTypeFailure());
  }
}

export function* listTickets() {
  const visualizacao = yield select(state => state.tickets.visualizacao);

  try {
    const response = yield call(api.get, 'tickets', {
      params: {
        visualizacao,
      },
    });

    yield put(showTicketsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao buscar os chamados !');
    yield put(showTicketsFailure());
  }
}

export default all([
  takeLatest('@tickets/CHANGE_TICKETS_TYPE_REQUEST', alterarVisualizacao),
  takeLatest('@tickets/LIST_TICKETS_REQUEST', listTickets),
]);
