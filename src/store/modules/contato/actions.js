/**
 * Adicionar Contato
 */
export function addContactRequest(contact) {
  return {
    type: '@contact/ADD_CONTACT_REQUEST',
    payload: { contact },
  };
}

export function addContactSuccess(contact) {
  return {
    type: '@contact/ADD_CONTACT_SUCCESS',
    payload: { contact },
  };
}

export function addContactFailure(error) {
  return {
    type: '@contact/ADD_CONTACT_FAILURE',
    payload: { error },
  };
}

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

export function loadCustomParamRequest(id) {
  return {
    type: '@contact/LOAD_CUSTOM_PARAM_REQUEST',
    payload: { id },
  };
}

export function loadCustomParamSuccess(payload) {
  return {
    type: '@contact/LOAD_CUSTOM_PARAM_SUCCESS',
    payload: { payload },
  };
}

export function loadCustomParamFailure() {
  return {
    type: '@contact/LOAD_CUSTOM_PARAM_FAILURE',
    payload: {},
  };
}

export function deleteCustomParamRequest(id) {
  return {
    type: '@contact/DELETE_CUSTOM_PARAM_REQUEST',
    payload: { id },
  };
}

export function deleteCustomParamSuccess(message, id) {
  return {
    type: '@contact/DELETE_CUSTOM_PARAM_SUCCESS',
    payload: { message, id },
  };
}

export function deleteCustomParamFailure(msg) {
  return {
    type: '@contact/DELETE_CUSTOM_PARAM_FAILURE',
    payload: { msg },
  };
}

export function addCustomParamTemplateRequest(payload) {
  return {
    type: '@contact/ADD_CUSTOM_PARAM_TEMPLATE_REQUEST',
    payload,
  };
}

export function addCustomParamTemplateSuccess(payload) {
  return {
    type: '@contact/ADD_CUSTOM_PARAM_TEMPLATE_SUCCESS',
    payload,
  };
}

export function addCustomParamTemplateFailure(payload) {
  return {
    type: '@contact/ADD_CUSTOM_PARAM_TEMPLATE_FAILURE',
    payload,
  };
}
