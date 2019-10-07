/**
 * Buscar Contato
 */
export function getContactRequest(payload) {
  return {
    type: '@contact/GET_CONTACT_REQUEST',
    payload,
  };
}

export function getContactSuccess(contact) {
  return {
    type: '@contact/GET_CONTACT_SUCCESS',
    payload: { contact },
  };
}

export function getContactFailure() {
  return {
    type: '@contact/GET_CONTACT_FAILURE',
  };
}

/**
 * Adicionar Parametro Customizado
 */
export function addCustomParamRequest(payload) {
  return {
    type: '@contact/ADD_CUSTOM_PARAM',
    payload,
  };
}

/**
 * Alterar Parametro Customizado
 */
export function updateCustomParamRequest(payload) {
  return {
    type: '@contact/UPDATE_CUSTOM_PARAM',
    payload,
  };
}

/**
 * Update de Contato
 */
export function updateContactRequest(payload) {
  return {
    type: '@contact/UPDATE_CONTACT_REQUEST',
    payload,
  };
}

export function updateContactSuccess(contact) {
  return {
    type: '@contact/UPDATE_CONTACT_SUCCESS',
    payload: { contact },
  };
}

export function updateContactFailure() {
  return {
    type: '@contact/UPDATE_CONTACT_FAILURE',
  };
}

/**
 * Delete Field
 */
export function deleteFieldRequest(payload) {
  return {
    type: '@contact/DELETE_FIELD_REQUEST',
    payload,
  };
}

export function deleteFieldSuccess(field) {
  return {
    type: '@contact/DELETE_FIELD_SUCCESS',
    payload: { field },
  };
}

export function deleteFieldFailure() {
  return {
    type: '@contact/DELETE_FIELD_FAILURE',
  };
}
