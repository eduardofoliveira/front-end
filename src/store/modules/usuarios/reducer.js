import produce from 'immer';

const INITIAL_STATE = {
  usuarios: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@usuarios/LIST_USERS_SUCCESS':
      return produce(state, draft => {
        draft.usuarios = action.payload;
      });
    default:
      return state;
  }
}
