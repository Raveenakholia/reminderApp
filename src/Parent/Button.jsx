import React from 'react';

function Button({ text, handlecick }) {
	console.log(`${text}button is rendering`);
	return <button onClick={handlecick}>{text}</button>;
}

export default Button;
