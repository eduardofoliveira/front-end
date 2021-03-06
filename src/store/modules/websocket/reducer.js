import produce from 'immer';

const INITIAL_STATE = {
  chamados: [],
  index: 0,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.chamados = [];
        draft.index = 0;
      });
    case '@websocket/RECEIVE_CALL_SUCCESS':
      return produce(state, draft => {
        const displayNone = state.chamados.map(item => {
          item.display = 'none';
          return item;
        });
        const { ticket } = action.payload;
        ticket.aberto = 1;
        ticket.display = 'block';

        draft.chamados = [...displayNone, ticket];
        draft.index = state.chamados.length;
      });
    case '@websocket/CHANGE_TICKET_REQUEST':
      return produce(state, draft => {
        draft.chamados = state.chamados.map((chamado, index) => {
          if (chamado.id !== action.payload.id) {
            chamado.display = 'none';
          } else {
            chamado.display = 'block';
            draft.index = index;
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
              draft.index = index;
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

          const existeAberto = chamadosAbertos.filter(
            item => item.display === 'block'
          );

          if (!(existeAberto.length > 0)) {
            chamadosAbertos = chamadosAbertos.map((chamadoi, index) => {
              if (index === chamadosAbertos.length - 1) {
                chamadoi.display = 'block';
              } else {
                chamadoi.display = 'none';
              }
              return chamadoi;
            });
          }

          draft.chamados = [...chamadosAbertos];
        }
      });
    case '@websocket/DELETE_TICKET_SUCCESS':
      return produce(state, draft => {
        let retorno = state.chamados.filter(item => {
          return item.id !== action.payload.id;
        });

        const existeAberto = retorno.filter(item => item.display === 'block');

        if (existeAberto.length === 0) {
          retorno = retorno.map((chamadoi, index) => {
            if (index === retorno.length - 1) {
              chamadoi.display = 'block';
            } else {
              chamadoi.display = 'none';
            }
            return chamadoi;
          });
        }

        draft.chamados = [...retorno];
      });
    case '@websocket/DELETE_ALL_OPEN_TICKET_SUCCESS':
      return produce(state, draft => {
        draft.chamados = [];
      });
    case '@websocket/CLEAR':
      return produce(state, draft => {
        draft.chamados = [];
        draft.index = 0;
      });
    case '@websocket/CHANGE_TAB_POSITION':
      return produce(state, draft => {
        draft.index = action.payload.position;
      });
    case '@websocket/WRITE_COMMENT':
      return produce(state, draft => {
        const { id, comment } = action.payload.data;
        const chamadosAtualizados = state.chamados.map(item => {
          if (item.id === id) {
            item.comentario = comment;
            return item;
          }
          return item;
        });
        draft.chamados = chamadosAtualizados;
      });
    case '@websocket/CHANGE_TICKET_STATUS':
      return produce(state, draft => {
        const { id, aberto } = action.payload.data;
        const chamadosAtualizados = state.chamados.map(item => {
          if (item.id === id) {
            item.aberto = aberto;
            return item;
          }
          return item;
        });
        draft.chamados = chamadosAtualizados;
      });
    default:
      return state;
  }
}
