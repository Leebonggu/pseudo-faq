import { ActionType } from '@redux-saga/types';
import * as λ from 'ramda'

interface Loading {
  isLoading: boolean;
}

export const initialState: Loading = {
  isLoading: false,
};

export const FIRE_LOADING = '@@loading/FIRE_LOADING';
export const fireLoading = () => ({ type: FIRE_LOADING });

export const DONE_LOADING = '@@loading/DONE_LOADING';
export const doneLoading = () => ({ type: DONE_LOADING });

const reducer = (state = initialState, action: ActionType & { type: string }) => {
  switch (action.type) {
    case FIRE_LOADING:
      return λ.mergeRight(state, { isLoading: true });
    case DONE_LOADING:
      return λ.mergeRight(state, { isLoading: false });
    default:
      return state;
  }
}

export default reducer;