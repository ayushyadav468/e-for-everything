import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DELETE_PRODUCT_FROM_CART } from '../../../store/action/actions';
import axios from '../../../axiosInstance';
import styles from './CartCards.module.css';
import CartCard from '../../../components/CartCard/CartCard';
import Spinner from '../../../components/UI/Spinner/Spinner';
import DialogBox from '../../../components/UI/DialogBox/DialogBox';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeProductFromCart: (productID) =>
			dispatch({ type: DELETE_PRODUCT_FROM_CART, payload: productID }),
	};
};

const CartCards = (props) => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showDialogBox, setShowDialogBox] = useState(false);
	const [message, setMessage] = useState('');

	const isLoggedIn = props.userState.isLoggedIn;

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			await axios({
				method: 'PATCH',
				url: `/api/product/multiple/`,
				headers: {
					'content-type': 'application/json',
				},
				data: {
					productIDs: props.userState.userData.cartProducts,
				},
			})
				.then((response) => {
					setProductsData(response.data.products);
				})
				.catch((err) => {
					console.log(err.data);
				});
			setIsLoading(false);
		};

		if (isLoggedIn) {
			fetchData();
			setMessage('');
		} else {
			setMessage('Please login to see product in cart');
		}
	}, []);

	// function to handle delete button's on click in cartCard
	const deleteHandler = async (productID) => {
		// change productsData state to re-render page
		const updatedProducts = { ...productsData };
		// get a new object with values and remove product 'productID'
		const newProductData = Object.values(updatedProducts).filter(
			(product) => product._id !== productID
		);
		const token = props.userState.token;
		await axios({
			method: 'PATCH',
			url: `/api/auth/user/delfromcart`,
			headers: {
				'content-type': 'application/json',
				'auth-token': token,
			},
			data: {
				productID: productID,
			},
		})
			.then((result) => {
				setProductsData(newProductData);
				// Dispatch an action to remove product from cart
				props.removeProductFromCart(productID);
				dialogBox('Item removed from cart');
			})
			.catch((err) => {
				console.log(err);
				dialogBox('Error occured while removing item from cart');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	let cartCards;
	if (!isLoggedIn) {
		cartCards = <p className={styles.emptyCartCardPara}>{message}</p>;
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
							dialogBox={(messageToBeDisplayed) =>
								dialogBox(messageToBeDisplayed)
							}
							deleteHandler={(productID) => deleteHandler(productID)}
						/>
					);
				});
			} else {
				cartCards = (
					<p className={styles.emptyCartCardPara}>
						Cart is empty. Add a product in cart
					</p>
				);
			}
		}
	}

	return (
		<>
			<div className={styles.cartCardsDiv}>{cartCards}</div>
			<DialogBox showBox={showDialogBox}>{message}</DialogBox>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCards);
