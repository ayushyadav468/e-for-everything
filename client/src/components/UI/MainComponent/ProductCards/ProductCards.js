import { useState, useEffect } from 'react';
import axios from '../../../../axiosInstance';
import styles from './ProductCards.module.css';
import Banner from '../Banner/Banner';
import ProductCard from './ProductCard/ProductCard';
import Spinner from '../../Spinner/Spinner';

const ProductCards = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		setIsLoading(true);
		const result = await axios
			.get('/products')
			.then((response) => {
				setProducts(response.data.products);
			})
			.catch((err) => {
				console.log(err);
			});
		setIsLoading(false);
		return result;
	};

	useEffect(() => {
		fetchData();
	}, []);

	let cards;
	if (isLoading) {
		cards = <Spinner />;
	} else {
		cards = products.map((product) => {
			return <ProductCard key={product.id} {...product} />;
		});
	}

	return (
		<div className='Product_Card_Container' style={{ width: '100%' }}>
			<Banner />
			<h2 className={styles.productHeading}>Featured Products</h2>
			<div className={styles.productCards}>{cards}</div>
		</div>
	);
};

export default ProductCards;
