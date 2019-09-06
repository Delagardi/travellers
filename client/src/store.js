import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import travelSaga from './components/search/sagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(travelSaga);

export default store;
