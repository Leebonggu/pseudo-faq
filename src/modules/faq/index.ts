import * as λ from 'ramda';
import { FAQCategoryType, FAQTabType } from "@typings/index";

type FAQState = {
  faq_list: FAQCategoryType;
  faq_tab_list: FAQTabType[];
  tab: number;
  dummy: number;
};

export const initialState: FAQState = {
  faq_list: {
    id: '',
    title: '',
    contents: [],
  },
  faq_tab_list: [],
  tab: 1,
  dummy: 1,
};

export const INITIALIZE_FAQ_LIST = '@@faq/INITIALIZE_FAQ_LIST';
export const initializeFaqData = () => ({ type: INITIALIZE_FAQ_LIST });

export const UPDATE_FAQ_TAB = '@@faq/UPDATE_FAQ_TAB';
export const updateFaqList = (faq_list: FAQCategoryType) => ({ type: UPDATE_FAQ_TAB, payload: { faq_list } });

export const UPDATE_FAQ_LIST = '@@faq/UPDATE_FAQ_LIST';
export const updateFaqTab = (faq_tab_list: FAQTabType[]) => ({ type: UPDATE_FAQ_LIST, payload: { faq_tab_list } });

export const CHANGE_TAB = '@@faq/CHANGE_TAB';
export const changeTab = (tabNumber: number) => ({ type: CHANGE_TAB, payload: { tab: tabNumber }});


const reducer = (state = initialState, action: Record<string, Partial<FAQState>>): FAQState => {
  switch (action.type) {
    case UPDATE_FAQ_LIST:
    case UPDATE_FAQ_TAB:
    case CHANGE_TAB:
      return λ.mergeRight(state, action.payload) 
    default:
      return state;
  }
};

export default reducer;
