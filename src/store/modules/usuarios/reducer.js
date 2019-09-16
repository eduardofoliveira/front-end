import produce from 'immer';

const INITIAL_STATE = {
  usuarios: [],
  usuario: {},
  loading: true,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@usuarios/GET_USER_DETAIL_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@usuarios/LIST_USERS_SUCCESS':
      return produce(state, draft => {
        draft.usuarios = action.payload;
      });
    case '@usuarios/GET_USER_DETAIL_SUCCESS':
      return produce(state, draft => {
        draft.usuario = action.payload;
        draft.loading = false;
      });
    case '@usuarios/HIDE_FROM':
      return produce(state, draft => {
        draft.loading = true;
      });
    default:
      return state;
  }
}
