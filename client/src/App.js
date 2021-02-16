// import { useState, useEffect } from 'react';
// import axios from './axiosInstance';
// import Spinner from './components/UI/Spinner/Spinner';
import Index from './components/Index';
import styles from './App.module.css';

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
			{/* SPINNER AND OTHER FEATURE TO BE ADDED */}
			{/* INDEX CONTAIN ALL UI */}
			<Index />
		</div>
	);
};

export default App;
