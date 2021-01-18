import { takeEvery } from 'redux-saga/effects';

function* workerSaga() {
	console.log('hello from worker');
}
function* rootSaga() {
	//console.log('hey saga');

	yield takeEvery('hello', workerSaga);
}

export default rootSaga;
