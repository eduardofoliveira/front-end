import produce from 'immer';

const INITIAL_STATE = {
  login: false,
  pause: false,
  breaks: [],
};

export default function callcenter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@callcenter/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.login = true;
        draft.pause = false;
      });
    case '@callcenter/LOGIN_FAILURE':
      return produce(state, draft => {
        draft.login = false;
        draft.pause = false;
      });
    case '@callcenter/LOGOUT_SUCCESS':
      return produce(state, draft => {
        draft.login = false;
        draft.pause = false;
      });
    case '@callcenter/LOGOUT_FAILURE':
      return produce(state, draft => {
        draft.login = true;
        draft.pause = false;
      });
    case '@callcenter/ENTRAR_PAUSA_SUCCESS':
      return produce(state, draft => {
        draft.login = true;
        draft.pause = true;
      });
    case '@callcenter/ENTRAR_PAUSA_FAILURE':
      return produce(state, draft => {
        draft.login = true;
        draft.pause = false;
      });
    case '@callcenter/SAIR_PAUSA_SUCCESS':
      return produce(state, draft => {
        draft.login = true;
        draft.pause = false;
      });
    case '@callcenter/SAIR_PAUSA_FAILURE':
      return produce(state, draft => {
        draft.login = true;
        draft.pause = true;
      });
    case '@callcenter/GET_BREAKS_SUCCESS':
      return produce(state, draft => {
        draft.breaks = action.payload.breaks;
      });
    case '@callcenter/GET_BREAKS_FAILURE':
      return produce(state, draft => {
        draft.breaks = [];
      });
    default:
      return state;
  }
}
