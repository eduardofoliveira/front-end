import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { receiveCallSuccess, receiveCallFailure } from './actions';

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

export default all([
  takeLatest('@websocket/RECEIVE_CALL_REQUEST', receiveCall),
]);
