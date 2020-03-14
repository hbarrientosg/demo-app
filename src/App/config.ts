import * as api from '@drieam/api';
import { API } from './store/api';

export type AppProps = Partial<{
  currentUser: { id: string };
  currentContext: { id: string };
  assignmentGuid: string;
}>;

export type MainAppState = {
  api: api.reducers.Connect<API>;
  app: AppProps;
  isOneSection: boolean;
  currentPage: string;
};