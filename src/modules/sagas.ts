import { spawn } from 'redux-saga/effects';
import faqSaga from './faq/faqSaga';

function* rootSaga() {
  yield spawn(faqSaga);
}

export default rootSaga;
