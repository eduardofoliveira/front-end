import produce from 'immer';

const INITIAL_STATE = {
  ticket: {},
  loading: true,
};

export default function ticket(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@ticket/GET_TICKET_REQUEST':
      return produce(state, draft => {
        draft.ticket = {};
        draft.loading = true;
      });
    case '@ticket/GET_TICKET_SUCCESS':
      return produce(state, draft => {
        draft.ticket = action.payload.ticket;
        draft.loading = false;
      });
    case '@ticket/GET_TICKET_FAILURE':
      return produce(state, draft => {
        draft.ticket = {};
        draft.loading = false;
      });
    case '@ticket/UPDATE_TICKET_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@ticket/UPDATE_TICKET_SUCCESS':
      return produce(state, draft => {
        draft.ticket = action.payload.ticket;
        draft.loading = false;
      });
    case '@ticket/UPDATE_TICKET_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
