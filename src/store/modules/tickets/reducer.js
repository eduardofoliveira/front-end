import produce from 'immer';

const INITIAL_STATE = {
  visualizacao: 'todos',
  visualizacaoUser: 'todos',
  tickets: { count: 0, rows: [] },
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.visualizacao = 'todos';
        draft.visualizacaoUser = 'todos';
        draft.tickets = { count: 0, rows: [] };
      });
    case '@tickets/CHANGE_TICKETS_TYPE_SUCCESS':
      return produce(state, draft => {
        draft.visualizacao = action.payload.visualizacao;
      });
    case '@tickets/LIST_TICKETS_SUCCESS':
      return produce(state, draft => {
        draft.tickets = action.payload.tickets;
      });
    case '@tickets/CHANGE_TICKETS_USER_SUCCESS':
      return produce(state, draft => {
        draft.visualizacaoUser = action.payload.visualizacaoUser;
      });
    default:
      return state;
  }
}
