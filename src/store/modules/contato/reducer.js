import produce from 'immer';

const INITIAL_STATE = {
  contact: {},
  loading: true,
};

export default function contact(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.contact = {};
        draft.loading = true;
      });
    case '@contact/GET_CONTACT_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@contact/GET_CONTACT_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.contact = action.payload.contact;
      });
    case '@contact/GET_CONTACT_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@contact/ADD_CUSTOM_PARAM':
      return produce(state, draft => {
        draft.contact.ContactFields.push({
          nome_campo: action.payload.name,
          conteudo: '',
        });
      });
    case '@contact/UPDATE_CUSTOM_PARAM':
      return produce(state, draft => {
        const param = draft.contact.ContactFields.map(item => {
          if (item.nome_campo === action.payload.target) {
            item.conteudo = action.payload.value;
          }
          return item;
        });
        draft.contact.ContactFields = param;
      });
    case '@contact/UPDATE_CONTACT_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@contact/UPDATE_CONTACT_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.contact = action.payload.contact;
      });
    case '@contact/UPDATE_CONTACT_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@contact/DELETE_FIELD_REQUEST':
      return produce(state, draft => {
        const param = draft.contact.ContactFields.filter(item => {
          if (item.nome_campo === action.payload.name) {
            return false;
          }
          return true;
        });
        draft.contact.ContactFields = param;
      });

    case '@contact/LOAD_CUSTOM_PARAM_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@contact/LOAD_CUSTOM_PARAM_SUCCESS':
      return produce(state, draft => {
        const lista = action.payload.payload.map(item => {
          return {
            id: item.id,
            nome_campo: item.nome_campo,
            conteudo: '',
          };
        });
        draft.contact.ContactFields = lista;
        draft.loading = false;
      });
    case '@contact/LOAD_CUSTOM_PARAM_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@contact/DELETE_CUSTOM_PARAM_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@contact/DELETE_CUSTOM_PARAM_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        const lista = state.contact.ContactFields.filter(item => {
          return item.id !== action.payload.id;
        });
        draft.contact.ContactFields = lista;
      });
    case '@contact/DELETE_CUSTOM_PARAM_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@contact/ADD_CUSTOM_PARAM_TEMPLATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@contact/ADD_CUSTOM_PARAM_TEMPLATE_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        const obj = {
          id: action.payload.id,
          nome_campo: action.payload.nome_campo,
          conteudo: '',
        };
        draft.contact.ContactFields = [...draft.contact.ContactFields, obj];
      });
    case '@contact/ADD_CUSTOM_PARAM_TEMPLATE_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });

    default:
      return state;
  }
}
