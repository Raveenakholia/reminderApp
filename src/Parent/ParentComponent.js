import React, { useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const ParentComponent = () => {
	const [age, setAge] = useState(24);
	const [salary, setSalary] = useState(50000);

	const incrementSalary = () => {
		setSalary(salary + 10000);
	};

	const incrementAge = () => {
		setAge(age + 1);
	};
	return (
		<div>
			<Title />
			<Count text='age' count={age} />
			<Button text='Increment Age' handleButton={incrementAge} />
			<Count text='Salary' count={salary} />
			<Button text='Increment Salary' handleButton={incrementSalary} />
		</div>
	);
};

export default ParentComponent;
