import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../Saga/rootSaga';

const sagaMiddleWare = createSagaMiddleWare();
const configStore = () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
	sagaMiddleWare.run(rootSaga);
	store.dispatch({ type: 'hello' });
	return store;
};

export default configStore;
