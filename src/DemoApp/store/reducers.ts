import * as api from '@drieam/api';
import { combineReducers } from 'redux';
import { apiRoutes, API } from './api';

export const root = combineReducers({
  api: api.reducers.connect<API>(apiRoutes),
  app: (app = {}) => app,
});
