import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	error: errorReducer,
	images: imageReducer,
});

export default rootReducer;
