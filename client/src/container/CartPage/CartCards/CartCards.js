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
		user: state.user,
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
	const [productQuantity, setProductQuantity] = useState(0);
	const [showDialogBox, setShowDialogBox] = useState(false);
	const [message, setMessage] = useState('');

	let userID;
	// check if user is logged in
	if (
		Object.keys(props.user).length !== 0 &&
		props.user.constructor === Object
	) {
		userID = props.user._id;
	}

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			await axios
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
		};

		if (userID) {
			fetchData();
			setMessage('');
		} else {
			setMessage('Please login to see product in cart');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userID]);

	// function to handle delete button's on click in cartCard
	const deleteHandler = (productID) => {
		// change productsData state to re-render page
		const updatedProducts = { ...productsData };
		// get a new object with values and remove product 'productID'
		const newProductData = Object.values(updatedProducts).filter(
			(product) => product._id !== productID
		);
		setProductsData(newProductData);
		// Dispatch an action to remove product from cart
		props.removeProductFromCart(productID);
		dialogBox('Item removed from cart');
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	let cartCards;
	if (!userID) {
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
							productQuantity={productQuantity}
							setProductQuantity={setProductQuantity}
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
		<div className={styles.cartCardsDiv}>
			{cartCards}
			<DialogBox showBox={showDialogBox}>{message}</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCards);