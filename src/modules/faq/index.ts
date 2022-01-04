import { ActionType } from '@typings/index'

export const initialState = {};

export const GET_FAQ_LIST = '@@faq/GET_FAQ_LIST';
export const getFaqList = (id: number) => ({ type: GET_FAQ_LIST, payload: id })

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_FAQ_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;