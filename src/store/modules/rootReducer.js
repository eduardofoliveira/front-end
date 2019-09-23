import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import usuarios from './usuarios/reducer';
import tickets from './tickets/reducer';

export default combineReducers({
  auth,
  user,
  usuarios,
  tickets,
});
