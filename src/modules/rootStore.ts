import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { rootReducer } from './rootReducer';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const reduxSaga = createSagaMiddleware();
const middlewares = [routerMiddleware(history), reduxThunk, reduxSaga];
const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(...middlewares)));
reduxSaga.run(rootSaga);

export default store;