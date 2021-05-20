import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DELETE_PRODUCT_FROM_FAV } from '../../../store/action/actions';
import axios from '../../../axiosInstance';
import styles from './FavouriteCards.module.css';
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
		removeProductFromFav: (productID) =>
			dispatch({ type: DELETE_PRODUCT_FROM_FAV, payload: productID }),
	};
};

const CartCards = (props) => {
	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [productQuantity, setProductQuantity] = useState(0);
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
					productIDs: props.userState.userData.favProducts,
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
			setMessage('Please login to see product in favourites');
		}
	}, []);

	// function to handle delete button's on click in favCard
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
			url: `/api/auth/user/delfromfav`,
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
				// Dispatch an action to remove product from fav
				props.removeProductFromFav(productID);
				dialogBox('Item removed from favourites');
			})
			.catch((err) => {
				console.log(err);
				dialogBox('Error occured while removing item from favourites');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	let favCards;
	if (!isLoggedIn) {
		favCards = <p className={styles.emptyFavCardPara}>{message}</p>;
	} else {
		if (isLoading) {
			favCards = <Spinner />;
		} else {
			if (productsData.length !== 0) {
				favCards = productsData.map((product) => {
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
				favCards = (
					<p className={styles.emptyFavCardPara}>
						Favourites is empty. Add a product in favourites
					</p>
				);
			}
		}
	}

	return (
		<div className={styles.favCardsDiv}>
			{favCards}
			<DialogBox showBox={showDialogBox}>{message}</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCards);
