/**
 * Listagem de usuários
 */
export function listUsersRequest(data) {
  return {
    type: '@usuarios/LIST_USERS_REQUEST',
    payload: { data },
  };
}

export function listUsersSuccess(users) {
  return {
    type: '@usuarios/LIST_USERS_SUCCESS',
    payload: users,
  };
}

export function listUsersFailure() {
  return {
    type: '@usuarios/LIST_USERS_FAILURE',
  };
}

/**
 * Detalhes de usuário
 */
export function getUserDetailRequest(data) {
  return {
    type: '@usuarios/GET_USER_DETAIL_REQUEST',
    payload: { data },
  };
}

export function getUserDetailSuccess(user) {
  return {
    type: '@usuarios/GET_USER_DETAIL_SUCCESS',
    payload: user,
  };
}

export function getUserDetailFailure() {
  return {
    type: '@usuarios/GET_USER_DETAIL_FAILURE',
  };
}

/**
 * Atualização de usuário
 */
export function userUpdateRequest(data) {
  return {
    type: '@usuarios/UPDATE_USER_REQUEST',
    payload: { data },
  };
}

export function userUpdatelSuccess(user) {
  return {
    type: '@usuarios/UPDATE_USER_SUCCESS',
    payload: user,
  };
}

export function userUpdateFailure() {
  return {
    type: '@usuarios/UPDATE_USER_FAILURE',
  };
}

/**
 * Hide Form
 */
export function HideFormRequest() {
  return {
    type: '@usuarios/HIDE_FROM',
    payload: {},
  };
}
