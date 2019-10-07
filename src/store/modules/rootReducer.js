import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import usuarios from './usuarios/reducer';
import tickets from './tickets/reducer';
import ticket from './ticket/reducer';
import contatos from './contatos/reducer';
import contato from './contato/reducer';

export default combineReducers({
  auth,
  user,
  usuarios,
  tickets,
  ticket,
  contatos,
  contato,
});
