import { useState, useEffect } from 'react';
import axios from '../../../../axiosInstance';
import styles from './ProductCards.module.css';
import ProductCard from './ProductCard/ProductCard';
import Spinner from '../../Spinner/Spinner';

const ProductCards = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		setIsLoading(false);
		const result = await axios.get('/data');
		if (result.status === 200) {
			setProducts(result.data.products);
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
		cards = products.map((product) => {
			return <ProductCard key={product.id} {...product} />;
		});
	}

	return (
		<div className='Project_Card_Container' style={{ width: '100%' }}>
			<h2 className={styles.productHeading}>Featured Products</h2>
			<div className={styles.productCards}>{cards}</div>
		</div>
	);
};

export default ProductCards;
