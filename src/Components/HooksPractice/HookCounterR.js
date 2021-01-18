import React, { useReducer } from 'react';

const initialValue = {
	firstCounter: 0,
	secondCounter: 10,
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'reset':
			return initialValue;
		default:
			return state;
	}
};
const HookCounterR = () => {
	const [count, dispatch] = useReducer(reducer, initialValue);

	return (
		<div>
			<div>
				First Count value is <strong>{count.firstCounter}</strong>{' '}
			</div>
			<div>
				First Count value is <strong>{count.secondCounter}</strong>
			</div>
			<button
				style={{ marginLeft: '10px', marginTop: '10px' }}
				className='btn btn-outline-success'
				onClick={() => dispatch({ type: 'increment', value: 1 })}>
				Increment
			</button>
			<button
				style={{ marginLeft: '10px', marginTop: '10px' }}
				className='btn btn-outline-warning'
				onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>
			<button
				style={{ marginLeft: '10px', marginTop: '10px' }}
				className='btn btn-outline-secondary'
				onClick={() => dispatch({ type: 'reset' })}>
				Reset
			</button>
		</div>
	);
};

export default HookCounterR;
