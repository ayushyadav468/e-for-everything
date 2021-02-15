// import { useState, useEffect } from 'react';
import styles from './App.module.css';
// import axios from './axios';
// import Spinner from './components/UI/Spinner/Spinner';
import Index from './components/index';

const App = () => {
	// var [response, setResponse] = useState('');

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios.get('/');
	// 		setResponse(result.data);
	// 		return response;
	// 	};
	// 	fetchData();
	// }, [response]);

	// var content = (
	// 	<div>
	// 		<Index />
	// 	</div>
	// );

	return (
		<div className={styles.App}>
			<Index />
		</div>
	);
};

export default App;
