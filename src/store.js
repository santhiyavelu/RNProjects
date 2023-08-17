import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import cartSlice from './features/cart/cartSlice';
import AuthSlice from './features/Auth/AuthSlice';
import {createLogger} from 'redux-logger';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    Auth: AuthSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
