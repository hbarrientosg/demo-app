import { Store, createStore, applyMiddleware } from 'redux';
import { store } from '@drieam/common';
import logger from 'redux-logger';
import { root } from './reducers';
import { apiRoutes } from './api';

export const setStore = (initialState = {}): Store => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isEnabled = isDevelopment || process.env.REDUX_LOG === 'true';

  const middlewares = [
    ...store.getCommonMiddlewares(apiRoutes),
    isEnabled && logger,
  ].filter(Boolean);

  return createStore(
    root,
    initialState,
    applyMiddleware(...middlewares),
  );
};
