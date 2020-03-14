/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ApiRoutes } from '@drieam/api';
import { User } from './models/user';

export type API = {
  users: User;
};

export const apiRoutes: ApiRoutes<API> = {
  users: {
    path: '/users/:id?',
    mapper: User,
    list: true,
  },
};
