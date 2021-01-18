import React from 'react';

const Count = (props) => {
	console.log(` ${props.text} count is rendering`);
	return (
		<p>
			{props.text} - {props.count}{' '}
		</p>
	);
};

export default Count;
