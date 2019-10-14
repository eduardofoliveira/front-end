import produce from 'immer';

const INITIAL_STATE = {
  chamados: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@websocket/RECEIVE_CALL_SUCCESS':
      return produce(state, draft => {
        const displayNone = state.chamados.map(item => {
          item.display = 'none';
          return item;
        });
        const { ticket } = action.payload;
        ticket.display = 'block';

        draft.chamados = [...displayNone, ticket];
      });
    case '@websocket/CHANGE_TICKET_REQUEST':
      return produce(state, draft => {
        draft.chamados = state.chamados.map(chamado => {
          if (chamado.id !== action.payload.id) {
            chamado.display = 'none';
          } else {
            chamado.display = 'block';
          }
          return chamado;
        });
      });
    default:
      return state;
  }
}
