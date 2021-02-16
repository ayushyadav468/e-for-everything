import { useState, useEffect } from 'react';
import axios from '../axiosInstance';
import MainComponent from './UI/MainComponent/MainComponent';
import Spinner from './UI/Spinner/Spinner';
import styles from './Index.module.css';

const Index = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		setIsLoading(false);
		const result = await axios.get('/data');
		if (result.status === 200) {
			setProducts(result.data);
		}
		setIsLoading(true);
		return result;
	};

	useEffect(() => {
		fetchData();
	}, []);

	let cards;
	if (!isLoading) {
		cards = <Spinner />;
	} else {
		cards = <MainComponent {...products} />;
	}

	return <div className={styles.ui}>{cards}</div>;
};

export default Index;
