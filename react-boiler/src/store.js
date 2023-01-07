import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import alertReducer from './reducers/alert';

const combinedReducer = combineReducers({
  alert: alertReducer,
});

const persistConfig = { key: 'root', storage, blacklist: ['initialize'] };

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'RESET') { // check for action type
    newState = undefined;
  }
  return combinedReducer(newState, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);
// persistor.purge(); // Used to clear persist storage.

export { persistor };
export default store;
