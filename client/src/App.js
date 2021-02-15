import { useState, useEffect } from 'react';
import styles from './App.module.css';
import axios from './axios';
import Spinner from './components/UI/Spinner/Spinner';

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

	var content = <Spinner />;
	if (response !== '') {
		content = (
			<div>
				<h1>React is running</h1>
				<p>{response}</p>
			</div>
		);
	}

	return <div className={styles.App}>{content}</div>;
};

export default App;
