import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import cartSlice from './features/cart/cartSlice';
import AuthSlice from './features/Auth/AuthSlice';
import {createLogger} from 'redux-logger';
import userSlice from './features/user/userSlice';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    Auth: AuthSlice,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(sagas);
