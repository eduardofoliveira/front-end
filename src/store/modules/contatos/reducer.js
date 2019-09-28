import produce from 'immer';

const INITIAL_STATE = {
  contacts: [],
  contact: {},
  loading: true,
};

export default function contacts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contacts/GET_CONTACTS_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@contacts/GET_CONTACTS_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.contacts = action.payload.contacts;
      });
    case '@contacts/GET_CONTACTS_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
