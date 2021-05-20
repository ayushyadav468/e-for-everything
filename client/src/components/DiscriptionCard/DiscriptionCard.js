import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
		userState: state.userState,
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
	const productID = useParams().productID;

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const result = await axios({
				method: 'GET',
				url: `/api/product/${productID}`,
				headers: { 'content-type': 'application/json' },
			})
				.then((response) => {
					setProduct(response.data.product);
				})
				.catch((err) => {
					console.log(err.data);
					// ! Check err object
					dialogBox(err.data);
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

	const addProductToFavouriteHandler = async () => {
		if (props.userState.isLoggedIn) {
			const token = props.userState.token;
			await axios({
				method: 'PATCH',
				url: `/api/auth/user/addtofav`,
				headers: {
					'content-type': 'application/json',
					'auth-token': token,
				},
				data: {
					productID: productID,
				},
			})
				.then((response) => {
					//! console.log(response);
					// Dispach ADD_PRODUCT_TO_FAVOURITE action to redux
					props.addToFavourite(productID);
					dialogBox('Product added to favrouites');
				})
				.catch((err) => {
					dialogBox('Error occured in saving product to favrouites');
				});
		} else {
			dialogBox('Not Log In');
		}
	};

	const addProductToCartHandler = async () => {
		if (props.userState.isLoggedIn) {
			const token = props.userState.token;
			await axios({
				method: 'PATCH',
				url: `/api/auth/user/addtocart`,
				headers: {
					'content-type': 'application/json',
					'auth-token': token,
				},
				data: {
					productID: productID,
				},
			})
				.then((response) => {
					//! console.log(response);
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
							{product.rating} / <strong>5.0</strong>
						</p>
					</div>
					<div className={styles.quantityBoxAndFavDiv}>
						<QuantityBox
							productQuantity={productQuantity}
							setProductQuantity={setProductQuantity}
							dialogBox={(messageToBeDisplayed) =>
								dialogBox(messageToBeDisplayed)
							}
						/>
						<button
							className={styles.fav}
							onClick={addProductToFavouriteHandler}
						>
							<svg
								width='512'
								height='431'
								viewBox='0 0 512 431'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M469.585 39.7395C413.906 -13.2445 323.279 -13.2445 267.582 39.7275L256.001 50.7275L244.432 39.7325C188.729 -13.2465 98.114 -13.2405 42.411 39.7325C15.061 65.7465 0 100.251 0 136.881C0 173.523 15.061 208.023 42.415 234.048L243.634 425.081C247.095 428.375 251.551 430.014 256 430.014C260.449 430.014 264.899 428.367 268.366 425.074L469.585 234.048C496.933 208.029 512 173.524 512 136.887C512 100.251 496.933 65.7525 469.585 39.7395ZM444.829 207.998L256 387.277L67.177 208.004C47.026 188.842 35.93 163.583 35.93 136.887C35.93 110.191 47.026 84.9325 67.177 65.7705C88.196 45.7695 115.802 35.7755 143.414 35.7755C171.032 35.7755 198.65 45.7815 219.669 65.7825L243.622 88.5325C250.556 95.1255 261.437 95.1255 268.372 88.5325L292.331 65.7705C334.375 25.7745 402.779 25.7745 444.823 65.7705C464.968 84.9335 476.07 110.191 476.07 136.887C476.07 163.583 464.968 188.836 444.829 207.998Z'
									fill='#3A3A3A'
								/>
							</svg>
						</button>
					</div>
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
							style={{ cursor: 'not-allowed' }}
							disabled
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
