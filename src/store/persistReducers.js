import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'basix_contact',
      storage,
      whitelist: ['auth', 'user', 'tickets', 'usuarios'],
    },
    reducers
  );

  return persistedReducer;
};
