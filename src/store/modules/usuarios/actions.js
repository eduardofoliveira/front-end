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
