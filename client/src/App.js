import { useEffect } from 'react';
import styles from './App.module.css';
import axios from 'axios';

const App = () => {
	useEffect(() => {
		console.log('document created');
		FetchAPI();
	}, []);

	return (
		<div className={styles.App}>
			<h1>React is running</h1>
		</div>
	);
};

const FetchAPI = () => {
	axios
		.get('http://localhost:8000')
		.then((res) => {
			console.log(res);
		})
		.catch((er) => {
			console.log(er.data);
		});
};

export default App;
