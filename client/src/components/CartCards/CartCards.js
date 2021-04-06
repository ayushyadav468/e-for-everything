import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axiosInstance';
import styles from './CartCards.module.css';
import CartCard from './CartCard/CartCard';
import Spinner from '../UI/Spinner/Spinner';
import DialogBox from '../UI/DialogBox/DialogBox';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const CartCards = (props) => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [productQuantity, setProductQuantity] = useState(0);
	const [showDialogBox, setShowDialogBox] = useState(false);
	const [error, setError] = useState('');

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
			.patch('/api/product/multiple/', {
				productIDs: [...props.user.cartProducts],
			})
			.then((response) => {
				setProductsData(response.data.products);
			})
			.catch((err) => {
				console.log(err.data);
			});
		setIsLoading(false);
		return result;
	};

	useEffect(() => {
		if (userID) {
			fetchData();
			setError('');
		} else {
			setError('Please login to see product in card');
		}
	}, []);

	const deleteHandler = () => {
		// function to handle delete button's on click in cartCard
		console.log('delete button clicked');
	};

	let cartCards;
	if (!userID) {
		cartCards = <p className={styles.emptyCardPara}>{error}</p>;
	} else {
		if (isLoading) {
			cartCards = <Spinner />;
		} else {
			if (productsData.length !== 0) {
				cartCards = productsData.map((product) => {
					return (
						<CartCard
							key={product._id}
							product={product}
							productQuantity={productQuantity}
							setProductQuantity={setProductQuantity}
							setShowDialogBox={setShowDialogBox}
							deleteHandler={deleteHandler}
						/>
					);
				});
			} else {
				cartCards = (
					<p className={styles.emptyCardPara}>
						Cart is empty. Add a product in cart
					</p>
				);
			}
		}
	}

	return (
		<div className={styles.cartCardsDiv}>
			{cartCards}
			<DialogBox showBox={showDialogBox}>Can't reduce below zero</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, null)(CartCards);
