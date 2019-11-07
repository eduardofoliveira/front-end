/* eslint-disable array-callback-return */
/* eslint-disable no-case-declarations */
import produce from 'immer';

const INITIAL_STATE = {
  usuarios: [],
  usuario: {},
  loading: true,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.usuarios = [];
        draft.usuario = {};
        draft.loading = true;
      });
    case '@usuarios/GET_USER_DETAIL_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@usuarios/LIST_USERS_SUCCESS':
      return produce(state, draft => {
        draft.usuarios = action.payload;
      });
    case '@usuarios/GET_USER_DETAIL_SUCCESS':
      const useri = action.payload.user;

      Object.keys(action.payload.user).map(item => {
        if (useri[item] === null) {
          useri[item] = '';
        }
      });

      return produce(state, draft => {
        draft.usuario = useri;
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
