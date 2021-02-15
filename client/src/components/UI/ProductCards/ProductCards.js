import { useState, useEffect } from 'react';
import axios from '../../../axios';
import ProductCard from './ProductCard/ProductCard';
import styles from './ProductCards.module.css';

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
		cards = <p>No card avaliable</p>;
	} else {
		cards = products.map((product) => {
			return <ProductCard key={product.id} {...product} />;
		});
	}

	return (
		<div className='Project_Card_Container'>
			<h2 className={styles.productHeading}>Featured Products</h2>
			<div className={styles.productCards}>{cards}</div>
		</div>
	);
};

export default ProductCards;
