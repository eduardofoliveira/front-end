/**
 * Buscar Ticket
 */
export function getTicketRequest(id) {
  return {
    type: '@ticket/GET_TICKET_REQUEST',
    payload: { id },
  };
}

export function getTicketSuccess(ticket) {
  return {
    type: '@ticket/GET_TICKET_SUCCESS',
    payload: { ticket },
  };
}

export function getTicketFailure() {
  return {
    type: '@ticket/GET_TICKET_FAILURE',
  };
}

/**
 * Atualizar Ticket
 */
export function updateTicketRequest(data) {
  return {
    type: '@ticket/UPDATE_TICKET_REQUEST',
    payload: { data },
  };
}

export function updateTicketSuccess(ticket) {
  return {
    type: '@ticket/UPDATE_TICKET_SUCCESS',
    payload: { ticket },
  };
}

export function updateTicketFailure() {
  return {
    type: '@ticket/UPDATE_TICKET_FAILURE',
  };
}

/**
 * Atualizar Ticket sem Redirecionamento
 */
export function updateTicketRequestDashboard(data) {
  return {
    type: '@ticket/UPDATE_TICKET_REQUEST_DASHBOARD',
    payload: { data },
  };
}
