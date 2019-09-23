import produce from 'immer';

const INITIAL_STATE = {
  visualizacao: 'todos',
  tickets: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tickets/CHANGE_TICKETS_TYPE_SUCCESS':
      return produce(state, draft => {
        draft.visualizacao = action.payload.visualizacao;
      });
    case '@tickets/LIST_TICKETS_SUCCESS':
      return produce(state, draft => {
        draft.tickets = action.payload.tickets;
      });
    default:
      return state;
  }
}
