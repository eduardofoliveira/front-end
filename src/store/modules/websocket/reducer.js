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
    case '@websocket/OPEN_TICKET_SUCCESS':
      return produce(state, draft => {
        draft.chamados = state.chamados.filter(item => {
          return action.payload.ids.map(item2 => item2.id).includes(item.id);
        });
      });
    case '@websocket/REMOVE_TICKET_OPEN':
      return produce(state, draft => {
        draft.chamados = state.chamados.filter(
          item => action.payload.id !== item.id
        );
      });
    case '@websocket/SHOW_NEXT_OPEN':
      return produce(state, draft => {
        if (state.chamados.length > 0) {
          draft.chamados = state.chamados.map((chamado, index) => {
            if (index === state.chamados.length - 1) {
              chamado.display = 'block';
            } else {
              chamado.display = 'none';
            }
            return chamado;
          });
        }
      });
    case '@websocket/CHECK_OPEN_TICKETS_SUCCESS':
      return produce(state, draft => {
        if (action.payload.tickets.length > 0) {
          const ids = state.chamados.map(chamado => {
            return chamado.id;
          });

          const novos = action.payload.tickets.filter(
            ticket => !ids.includes(ticket.id)
          );

          let chamadosAbertos = [...state.chamados, ...novos];

          chamadosAbertos = chamadosAbertos.map((chamadoi, index) => {
            if (index === chamadosAbertos.length - 1) {
              chamadoi.display = 'block';
            } else {
              chamadoi.display = 'none';
            }
            return chamadoi;
          });

          draft.chamados = [...chamadosAbertos];
        }
      });
    default:
      return state;
  }
}
