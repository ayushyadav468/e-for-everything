import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	ADD_PRODUCT_TO_FAV,
	ADD_PRODUCT_TO_CART,
} from '../../store/action/actions';
import axios from '../../axiosInstance';
import styles from './DiscriptionCard.module.css';
import Spinner from '../UI/Spinner/Spinner';
import ReviewCards from '../ReviewCards/ReviewCards';
import QuantityBox from '../UI/QuantityBox/QuantityBox';
import DialogBox from '../UI/DialogBox/DialogBox';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (productID) =>
			dispatch({ type: ADD_PRODUCT_TO_CART, payload: productID }),
		addToFavourite: (productID) =>
			dispatch({ type: ADD_PRODUCT_TO_FAV, payload: productID }),
	};
};

const DiscriptionCard = (props) => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [showDialogBox, setShowDialogBox] = useState(false);
	const [productQuantity, setProductQuantity] = useState(0);
	const [message, setMessage] = useState('');
	// getting product id from URL
	const productID = props.match.params.productID;
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
			const result = await axios
				.get('/api/product/' + productID)
				.then((response) => {
					setProduct(response.data.product);
				})
				.catch((err) => {
					console.log(err.data);
				});
			setIsLoading(false);
			return result;
		};

		fetchData();
	}, [productID]);

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	// const addProductToFavouriteHandler = () => {
	// 	if (userID) {
	// 		axios
	// 			.patch('/api/user/' + userID + '/fav/', {
	// 				productID: productID,
	// 			})
	// 			.then((response) => {
	// 				props.addToFavourite(productID);
	// 				dialogBox('Product added to favrouites');
	// 			})
	// 			.catch((err) => {
	// 				dialogBox('Error occured in saving product to favrouites');
	// 			});
	// 	} else {
	// 		dialogBox('Not Log In');
	// 	}
	// };

	const addProductToCartHandler = () => {
		if (userID) {
			axios
				.patch('/api/user/' + userID + '/cart/', {
					productID: productID,
				})
				.then((response) => {
					// console.log(response);
					// Dispach ADD_PRODUCT_TO_CART action to redux
					props.addToCart(productID);
					dialogBox('Product added to cart');
				})
				.catch((err) => {
					console.log(err);
					dialogBox('Error occured in saving product to cart');
				});
		} else {
			dialogBox('Not Log In');
		}
	};

	let discriptionCard;
	if (isLoading) {
		discriptionCard = <Spinner />;
	} else {
		const srcSet =
			product.largeImage + ' 1260w,' + product.smallImage + ' 640w';
		discriptionCard = (
			<div className={styles.productDiscriptionCard}>
				<div className={styles.productDiscriptionImageDiv}>
					<img
						className={styles.productImage}
						src={product.smallImage}
						alt={product.productName}
						sizes='(min-width:769px) 1260px, 640px'
						srcSet={srcSet}
					/>
				</div>
				<div className={styles.productDiscriptionDiv}>
					<h3 className={styles.productName}>{product.productName}</h3>
					<p className={styles.productDiscription}>
						{product.productDiscription}
					</p>
					<div className={styles.productPriceAndRatingDiv}>
						<p className={styles.productPrice}>
							<strong>Rs.</strong> {product.productPrice}
						</p>
						<p className={styles.productRating}>
							<strong>{product.rating}</strong>/5.0
						</p>
					</div>
					<QuantityBox
						productQuantity={productQuantity}
						setProductQuantity={setProductQuantity}
						dialogBox={(messageToBeDisplayed) =>
							dialogBox(messageToBeDisplayed)
						}
					/>
					<div className={styles.productBtnDiv}>
						<button
							className={[styles.productBtn, styles.productAddToCartBtn].join(
								' '
							)}
							onClick={addProductToCartHandler}
						>
							Add to Cart
						</button>
						<button
							className={[styles.productBtn, styles.productBuyNowBtn].join(' ')}
						>
							Buy Now
						</button>
					</div>
				</div>
				<DialogBox showBox={showDialogBox}>{message}</DialogBox>
			</div>
		);
	}

	return (
		<div className={styles.productDiscriptionPage}>
			{discriptionCard}
			<ReviewCards reviews={product.reviews} />
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscriptionCard);
