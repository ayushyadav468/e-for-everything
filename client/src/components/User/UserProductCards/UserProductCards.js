import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../../axiosInstance';
import Spinner from '../../UI/Spinner/Spinner';
import styles from './UserProductCards.module.css';
import ProductCard from '../../Product/ProductCards/ProductCard/ProductCard';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const UserProductCards = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

	let userID;
	// check if user is logged in
	if (
		Object.keys(props.user).length !== 0 &&
		props.user.constructor === Object
	) {
		userID = props.user._id;
	}

	const fetchData = async () => {
		setIsLoading(true);
		const result = await axios
			.get('/api/product/user/' + userID)
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userID]);

	let cards;
	let content;
	let filteredProducts;
	if (!userID) {
		content = (
			<>
				<div className={styles.addProductDiv}>
					<h2 className={styles.heading}>Please Login</h2>
				</div>
			</>
		);
	} else {
		if (isLoading) {
			cards = <Spinner />;
		} else {
			// Search functionality
			// check if there is a search in state
			//(this means that search is trigered from some other page)
			if (props.search !== '') {
				filteredProducts = products.filter((product) => {
					return product.productName
						.toLowerCase()
						.includes(props.search.toLowerCase());
				});
			} else {
				filteredProducts = products;
			}
			cards = filteredProducts.map((product) => {
				return <ProductCard key={product._id} {...product} edit={true} />;
			});
			content = (
				<>
					<div className={styles.addProductDiv}>
						<h2 className={styles.heading}>
							Products by {props.user.firstName}
						</h2>
						<Link
							to='/user/product/add'
							className={styles.addProductBtn}
						></Link>
					</div>
					<div className={styles.productCards}>{cards}</div>
				</>
			);
		}
	}

	return <>{content}</>;
};

export default connect(mapStateToProps, null)(UserProductCards);
