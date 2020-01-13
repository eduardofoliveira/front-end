import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  sairPausaSuccess,
  sairPausaFailure,
  getBreaksSuccess,
  getBreaksFailure,
  entrarPausaSuccess,
  entrarPausaFailure,
} from './actions';
import api from '~/services/api';

export function* login({ payload }) {
  try {
    const { user, domain } = payload;
    const { data } = yield call(api.post, '/callcenter/login', {
      user,
      domain,
    });
    yield put(loginSuccess(data));
    toast.success(data.message);
  } catch (error) {
    yield put(loginFailure({ error: 'Falha ao efetuar login' }));
    toast.error('Falha ao efetuar login');
  }
}

export function* logout({ payload }) {
  try {
    const { user, domain } = payload;
    const { data } = yield call(api.post, '/callcenter/logout', {
      user,
      domain,
    });
    yield put(logoutSuccess(data));
    toast.success(data.message);
  } catch (error) {
    yield put(logoutFailure({ error: 'Falha ao efetuar logout' }));
    toast.error('Falha ao efetuar logout');
  }
}

export function* sairPausa({ payload }) {
  try {
    const { user, domain } = payload;
    const { data } = yield call(api.post, '/callcenter/pausa/sair', {
      user,
      domain,
    });
    yield put(sairPausaSuccess(data));
    toast.success(data.message);
  } catch (error) {
    yield put(sairPausaFailure({ error: 'Falha ao sair da pausa' }));
    toast.error('Falha ao sair da pausa');
  }
}

export function* entrarPausa({ payload }) {
  try {
    const { user, domain, cod } = payload;
    const { data } = yield call(api.post, '/callcenter/pausa/entrar', {
      user,
      domain,
      cod,
    });
    yield put(entrarPausaSuccess(data));
    toast.success(data.message);
  } catch (error) {
    yield put(entrarPausaFailure({ error: 'Falha ao entrar em pausa' }));
    toast.error('Falha ao entrar em pausa');
  }
}

export function* getBreaks({ payload }) {
  try {
    const { domain, group } = payload;
    const { data } = yield call(api.get, '/callcenter/pausas', {
      params: { domain, group },
    });
    yield put(getBreaksSuccess(data));
    toast.success('Pausas atualizadas');
  } catch (error) {
    yield put(getBreaksFailure({ error: 'Falha ao buscar pausas' }));
    toast.error('Falha ao buscar pausas');
  }
}

export default all([
  takeLatest('@callcenter/LOGIN_REQUEST', login),
  takeLatest('@callcenter/LOGOUT_REQUEST', logout),
  takeLatest('@callcenter/SAIR_PAUSA_REQUEST', sairPausa),
  takeLatest('@callcenter/GET_BREAKS_REQUEST', getBreaks),
  takeLatest('@callcenter/ENTRAR_PAUSA_REQUEST', entrarPausa),
]);
