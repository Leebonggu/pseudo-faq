import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import faq from '@modules/faq/index';
import loading from '@modules/loading/index'

export const rootReducer = (historyLocation: History) =>
  combineReducers({
    faq,
    loading,
    router: connectRouter(historyLocation),
  });

export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
