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
 * Recebimento de chamada
 */
export function changeTicketRequest(id) {
  return {
    type: '@websocket/CHANGE_TICKET_REQUEST',
    payload: { id },
  };
}
