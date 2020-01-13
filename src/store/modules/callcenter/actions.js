/**
 * Efetuar login
 */
export function loginRequest(payload) {
  return {
    type: '@callcenter/LOGIN_REQUEST',
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: '@callcenter/LOGIN_SUCCESS',
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: '@callcenter/LOGIN_FAILURE',
    payload,
  };
}

/**
 * Efetuar logout
 */
export function logoutRequest(payload) {
  return {
    type: '@callcenter/LOGOUT_REQUEST',
    payload,
  };
}

export function logoutSuccess(payload) {
  return {
    type: '@callcenter/LOGOUT_SUCCESS',
    payload,
  };
}

export function logoutFailure(payload) {
  return {
    type: '@callcenter/LOGOUT_FAILURE',
    payload,
  };
}

/**
 * Entrar em Pausa
 */
export function entrarPausaRequest(payload) {
  return {
    type: '@callcenter/ENTRAR_PAUSA_REQUEST',
    payload,
  };
}

export function entrarPausaSuccess(payload) {
  return {
    type: '@callcenter/ENTRAR_PAUSA_SUCCESS',
    payload,
  };
}

export function entrarPausaFailure(payload) {
  return {
    type: '@callcenter/ENTRAR_PAUSA_FAILURE',
    payload,
  };
}

/**
 * Sair da Pausa
 */
export function sairPausaRequest(payload) {
  return {
    type: '@callcenter/SAIR_PAUSA_REQUEST',
    payload,
  };
}

export function sairPausaSuccess(payload) {
  return {
    type: '@callcenter/SAIR_PAUSA_SUCCESS',
    payload,
  };
}

export function sairPausaFailure(payload) {
  return {
    type: '@callcenter/SAIR_PAUSA_FAILURE',
    payload,
  };
}

/**
 * Buscar Pausas
 */
export function getBreaksRequest(payload) {
  return {
    type: '@callcenter/GET_BREAKS_REQUEST',
    payload,
  };
}

export function getBreaksSuccess(breaks) {
  return {
    type: '@callcenter/GET_BREAKS_SUCCESS',
    payload: { breaks },
  };
}

export function getBreaksFailure(payload) {
  return {
    type: '@callcenter/GET_BREAKS_FAILURE',
    payload,
  };
}
