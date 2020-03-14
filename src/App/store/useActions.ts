import * as api from '@drieam/api';
import { useDispatch, useSelector } from 'react-redux';
import { apiRoutes, API } from './api';
import { getAppProps } from './selectors';

const base = api.actions.connect<API>(apiRoutes);

type AsyncResponse = Promise<api.ResponseAction>;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActions = function useActions() {
  const dispatch = useDispatch();
  const props = useSelector(getAppProps);
  
  if (process.env.NODE_ENV === 'development') {
    console.warn(`app:`, props);
  }


  return {
    fetchUsers(filters = {}): AsyncResponse {
      return dispatch(
        base.users.getRequest(filters)
      );
    }
  };
}
