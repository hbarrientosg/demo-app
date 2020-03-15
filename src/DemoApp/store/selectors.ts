import { ListState } from '@drieam/api';
import { MainAppState, AppProps } from '../index.d';
import { User } from './models/user';

export const getAppProps = (state: MainAppState): AppProps => (state.app);

export const getUserList = (state: MainAppState): ListState<User> => (
  state.api.users.list as ListState<User>
);