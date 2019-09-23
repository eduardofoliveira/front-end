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
export function showTicketsRequest() {
  return {
    type: '@tickets/LIST_TICKETS_REQUEST',
    payload: {},
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
