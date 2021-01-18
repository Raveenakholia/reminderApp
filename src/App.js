import logo from './logo.svg';
import './App.css';
import CountHover from './Containers/CountHover';
import HeadingHover from './Containers/HeadingHover';
import BirthdayReminder from './Components/BirthdayReminder/BirthDayReminder';

function App() {
	return (
		<div className='App'>
			{/* <ParentComponent /> */}
			<BirthdayReminder />
		</div>
	);
}

export default App;
