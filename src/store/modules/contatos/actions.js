/**
 * Buscar Contatos
 */
export function getContactsRequest(payload) {
  return {
    type: '@contacts/GET_CONTACTS_REQUEST',
    payload,
  };
}

export function getContactsSuccess(contacts) {
  return {
    type: '@contacts/GET_CONTACTS_SUCCESS',
    payload: { contacts },
  };
}

export function getContactsFailure() {
  return {
    type: '@contacts/GET_CONTACTS_FAILURE',
  };
}
