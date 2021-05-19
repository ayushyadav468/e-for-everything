import axios from '../../../axiosInstance';
import { useState, useEffect } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import styles from './ProductCards.module.css';
import ProductCard from './ProductCard/ProductCard';

const ProductCards = ({ search }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		setIsLoading(true);
		const result = await axios({
			method: 'GET',
			url: '/api/product',
			headers: { 'content-type': 'application/json' },
		})
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
	let filteredProducts;

	if (isLoading) {
		cards = <Spinner />;
	} else {
		// Search functionality
		// check if there is a search in state
		//(this means that search is trigered from some other page)
		if (search !== '') {
			filteredProducts = products.filter((product) => {
				return product.productName.toLowerCase().includes(search.toLowerCase());
			});
		} else {
			filteredProducts = products;
		}

		cards = filteredProducts.map((product) => {
			return <ProductCard key={product._id} {...product} edit={false} />;
		});
	}

	return <div className={styles.productCards}>{cards}</div>;
};

export default ProductCards;
