/**
 * Alterar Visualizacao
 */
export function changeTicketsTypeRequest(data) {
  return {
    type: '@tickets/CHANGE_TICKETS_TYPE_REQUEST',
    payload: { data },
  };
}

export function changeTicketsTypeSuccess(visualizacao) {
  return {
    type: '@tickets/CHANGE_TICKETS_TYPE_SUCCESS',
    payload: { visualizacao },
  };
}

export function changeTicketsTypeFailure() {
  return {
    type: '@tickets/CHANGE_TICKETS_TYPE_FAILURE',
  };
}

/**
 * ListaTickets
 */
export function showTicketsRequest(data) {
  return {
    type: '@tickets/LIST_TICKETS_REQUEST',
    payload: { data },
  };
}

export function showTicketsSuccess(tickets) {
  return {
    type: '@tickets/LIST_TICKETS_SUCCESS',
    payload: { tickets },
  };
}

export function showTicketsFailure() {
  return {
    type: '@tickets/LIST_TICKETS_FAILURE',
  };
}

/**
 * Alterar Usuario
 */
export function changeTicketsUserRequest(data) {
  return {
    type: '@tickets/CHANGE_TICKETS_USER_REQUEST',
    payload: { data },
  };
}

export function changeTicketsUserSuccess(visualizacaoUser) {
  return {
    type: '@tickets/CHANGE_TICKETS_USER_SUCCESS',
    payload: { visualizacaoUser },
  };
}

export function changeTicketsUserFailure() {
  return {
    type: '@tickets/CHANGE_TICKETS_USER_FAILURE',
  };
}
