/**
 * Recebimento de chamada
 */
export function receiveCallRequest(data) {
  return {
    type: '@websocket/RECEIVE_CALL_REQUEST',
    payload: { data },
  };
}

export function receiveCallSuccess(ticket) {
  return {
    type: '@websocket/RECEIVE_CALL_SUCCESS',
    payload: { ticket },
  };
}

export function receiveCallFailure() {
  return {
    type: '@websocket/RECEIVE_CALL_FAILURE',
  };
}

/**
 * Mudar de aba
 */
export function changeTicketRequest(id) {
  return {
    type: '@websocket/CHANGE_TICKET_REQUEST',
    payload: { id },
  };
}

/**
 * Buscar ID´s de chamadas abertos
 */
export function openTicketsRequest() {
  return {
    type: '@websocket/OPEN_TICKET_REQUEST',
    payload: {},
  };
}

export function openTicketsSuccess(ids) {
  return {
    type: '@websocket/OPEN_TICKET_SUCCESS',
    payload: { ids },
  };
}

export function openTicketsFailure() {
  return {
    type: '@websocket/OPEN_TICKET_FAILURE',
    payload: {},
  };
}

/**
 * Altera Ticket e remove do dashboard
 */
export function removeTicketOpen(id) {
  return {
    type: '@websocket/REMOVE_TICKET_OPEN',
    payload: { id },
  };
}

/**
 * Exibe ultimo ticket aberto, se houver
 */
export function showNextOpen() {
  return {
    type: '@websocket/SHOW_NEXT_OPEN',
    payload: {},
  };
}

/**
 * Atualizar os Tickets abertos
 */
export function checkOpenTicketsRequest() {
  return {
    type: '@websocket/CHECK_OPEN_TICKETS_REQUEST',
    payload: {},
  };
}

export function checkOpenTicketsSuccess(tickets) {
  return {
    type: '@websocket/CHECK_OPEN_TICKETS_SUCCESS',
    payload: { tickets },
  };
}

/**
 * Deletar Ticket
 */
export function deleteTicketRequest(id) {
  return {
    type: '@websocket/DELETE_TICKET_REQUEST',
    payload: { id },
  };
}

export function deleteTicketSuccess(id) {
  return {
    type: '@websocket/DELETE_TICKET_SUCCESS',
    payload: { id },
  };
}

export function deleteTicketFailure() {
  return {
    type: '@websocket/DELETE_TICKET_FAILURE',
    payload: {},
  };
}

/**
 * Deletar Todos os Tickets Abertos
 */
export function deleteAllOpenTicketsRequest() {
  return {
    type: '@websocket/DELETE_ALL_OPEN_TICKET_REQUEST',
    payload: {},
  };
}

export function deleteAllOpenTicketsSuccess() {
  return {
    type: '@websocket/DELETE_ALL_OPEN_TICKET_SUCCESS',
    payload: {},
  };
}

export function deleteAllOpenTicketsFailure() {
  return {
    type: '@websocket/DELETE_ALL_OPEN_TICKET_FAILURE',
    payload: {},
  };
}

/**
 * Remove todos os Tickets da Tela
 */
export function clear() {
  return {
    type: '@websocket/CLEAR',
    payload: {},
  };
}

/**
 * Mudar de aba
 */
export function changeTabPosition(position) {
  return {
    type: '@websocket/CHANGE_TAB_POSITION',
    payload: { position },
  };
}

/**
 * Escrever dados da chamada
 */
export function writeComment(data) {
  return {
    type: '@websocket/WRITE_COMMENT',
    payload: { data },
  };
}

/**
 * Alterar status do chamado
 */
export function changeTicketStatus(data) {
  return {
    type: '@websocket/CHANGE_TICKET_STATUS',
    payload: { data },
  };
}
