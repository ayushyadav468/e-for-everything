import { useState, useEffect } from 'react';
import styles from './App.module.css';
import axios from './axios';

const App = () => {
	var [response, setResponse] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('/');
			setResponse(result.data);
			return response;
		};
		fetchData();
	}, [response]);

	return (
		<div className={styles.App}>
			<h1>React is running</h1>
			<p>{response}</p>
		</div>
	);
};

export default App;
