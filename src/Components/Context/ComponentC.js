import React, { useContext } from 'react';
import { counterContext } from '../../App';

const ComponentC = () => {
	const count = useContext(counterContext);
	return (
		<div>
			Component C - {count.countValue}
			<button
				style={{ marginLeft: '10px', marginTop: '10px' }}
				className='btn btn-outline-success'
				onClick={() => count.counterDispatch('increment')}>
				Increment
			</button>
			<button
				style={{ marginLeft: '10px', marginTop: '10px' }}
				className='btn btn-outline-warning'
				onClick={() => count.counterDispatch('decrement')}>
				Decrement
			</button>
			<button
				style={{ marginLeft: '10px', marginTop: '10px' }}
				className='btn btn-outline-secondary'
				onClick={() => count.counterDispatch('reset')}>
				Reset
			</button>
		</div>
	);
};

export default ComponentC;
