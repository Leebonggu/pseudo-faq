// eslint-disable-next-line no-empty-function

import * as λ from 'ramda'
import { takeEvery, delay, put } from "redux-saga/effects";
import { ActionType } from "@typings/index";
import { CHANGE_TAB, INITIALIZE_FAQ_LIST, updateFaqList, updateFaqTab, UPDATE_FAQ_TAB } from ".";
import { categories } from "@lib/mock/faq";
import { doneLoading, fireLoading } from '@modules/loading';


function*initializeFaqDataSaga() {
  yield put(fireLoading())
  yield delay(500);
  const [initialFaqList] = λ.filter(category => category.id === 1, categories);
  yield put({ type: UPDATE_FAQ_TAB })
  yield put(updateFaqList(initialFaqList))
  yield put(doneLoading())
}

function* updateFaqTabListSaga() {
  console.log('### DELAY 0.5 Second');
  const tabListData = λ.map(category => ({ id: Number(category.id), title: category.title }), categories);
  yield put(updateFaqTab(tabListData));
}

function* updateFaqListSaga(action: ActionType) {
  yield console.log(action);
}

function* faqSaga() {
  yield takeEvery(CHANGE_TAB, updateFaqListSaga);
  yield takeEvery(UPDATE_FAQ_TAB, updateFaqTabListSaga);
  yield takeEvery(INITIALIZE_FAQ_LIST, initializeFaqDataSaga);
}

export default faqSaga;
