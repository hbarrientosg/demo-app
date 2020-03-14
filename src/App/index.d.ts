import * as api from '@drieam/api';
import { API } from './store/api';

export type AppProps = {};

export type MainAppState = {
  api: api.reducers.Connect<API>;
  app: AppProps;
};