// eslint-disable-next-line no-empty-function

import * as λ from 'ramda'
import { takeEvery, delay, put } from "redux-saga/effects";
import { ActionType } from "@typings/index";
import { CHANGE_TAB, INITIALIZE_FAQ_LIST, updateFaqList, updateFaqTab, UPDATE_FAQ_TAB } from ".";
import { categories } from "@lib/mock/faq";


function*initializeFaqDataSaga() {
  yield delay(500);
  console.log('### DELAY 0.5 Second');
  const [initialFaqList] = λ.filter(category => category.id === 1, categories);
  yield put({ type: UPDATE_FAQ_TAB })
  yield put(updateFaqList(initialFaqList))
}

function* updateFaqTabListSaga() {
  yield delay(500);
  console.log('### DELAY 0.5 Second');
  const tabListData = λ.map(category => ({ id: category.id, title: category.title }), categories);
  yield put(updateFaqTab(tabListData));
}

function* updateFaqListSaga(action: ActionType) {
  yield delay(500);
  console.log(action);
  
}

function* faqSaga() {
  yield takeEvery(CHANGE_TAB, updateFaqListSaga);
  yield takeEvery(UPDATE_FAQ_TAB, updateFaqTabListSaga);
  yield takeEvery(INITIALIZE_FAQ_LIST, initializeFaqDataSaga);
}

export default faqSaga;
