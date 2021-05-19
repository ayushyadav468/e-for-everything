import { connect } from 'react-redux';
import axios from '../../../axiosInstance';
import { useState, useEffect } from 'react';
import DialogBox from '../../UI/DialogBox/DialogBox';
import styles from './ProductSettingsCard.module.css';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const ProductSettingsCard = (props) => {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState(0);
	const [smallImage, setSmallImage] = useState('');
	const [largeImage, setLargeImage] = useState('');
	const [productDiscription, setProductDiscription] = useState('');

	const [showDialogBox, setShowDialogBox] = useState(false);
	const [message, setMessage] = useState('');

	let userID;
	// check if user is logged in
	if (props.userState.isLoggedIn) {
		userID = props.userState.user._id;
	}

	// getting product id from URL
	const productID = props.match.params.productID;

	const setProductData = (product) => {
		setProductName(product.productName);
		setProductPrice(product.productPrice);
		setSmallImage(product.smallImage);
		setLargeImage(product.largeImage);
		setProductDiscription(product.productDiscription);
	};

	const fetchProductData = async () => {
		await axios({
			method: 'GET',
			url: `/api/product/${productID}`,
			headers: { 'content-type': 'application/json' },
		})
			.then((response) => {
				setProductData(response.data.product);
			})
			.catch((err) => {
				console.log(err.data);
			});
	};

	useEffect(() => {
		if (userID) {
			fetchProductData();
			console.log('user logged in and product edit');
		} else {
			console.log('user not logged in');
		}
	}, []);

	const onProductNameChangeHandler = (event) => {
		setProductName(event.target.value);
	};
	const onProductPriceChangeHandler = (event) => {
		setProductPrice(event.target.value);
	};
	const onSmallImageChangeHandler = (event) => {
		setSmallImage(event.target.value);
	};
	const onLargeImageChangeHandler = (event) => {
		setLargeImage(event.target.value);
	};
	const onProductDiscriptionChangeHandler = (event) => {
		setProductDiscription(event.target.value);
	};

	const productUpdateHandler = (event) => {
		event.preventDefault();
		const updatedProduct = {
			productName: productName,
			productPrice: productPrice,
			smallImage: smallImage,
			largeImage: largeImage,
			productDiscription: productDiscription,
		};
		axios
			.patch('/api/product/' + userID + '/' + productID, {
				...updatedProduct,
			})
			.then((result) => {
				console.log(result.data);
				dialogBox('Product updated');
			})
			.catch((error) => {
				console.log(error);
				dialogBox('Product not updated. Try again');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
		setTimeout(() => {
			setShowDialogBox(false);
		}, 2000);
	};

	return (
		<div className={styles.productSettingsCard}>
			{/* <h2 className={styles.heading}>Product settings</h2> */}
			<div className={styles.productSettingscontainer}>
				<h4 className={styles.productSettingsCardHeading}>Edit</h4>
				<form
					className={styles.productSettingsForm}
					onSubmit={productUpdateHandler}
				>
					<div className={styles.nameDiv}>
						<label className={styles.productLabel}>
							Product Name
							<input
								type='text'
								value={productName}
								onChange={(event) => onProductNameChangeHandler(event)}
							/>
						</label>
						<label className={styles.priceLabel}>
							Price
							<input
								type='number'
								value={productPrice}
								onChange={(event) => onProductPriceChangeHandler(event)}
							/>
						</label>
					</div>
					<label>
						Small Image URL
						<input
							type='url'
							value={smallImage}
							onChange={(event) => onSmallImageChangeHandler(event)}
						/>
					</label>
					<label>
						Large Image URL
						<input
							type='url'
							value={largeImage}
							onChange={(event) => onLargeImageChangeHandler(event)}
						/>
					</label>
					<label>
						Discription
						<textarea
							name='productDiscription'
							rows='5'
							value={productDiscription}
							onChange={(event) => onProductDiscriptionChangeHandler(event)}
						/>
					</label>
					<input type='submit' value='Save' />
				</form>
			</div>
			<DialogBox showBox={showDialogBox}>{message}</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, null)(ProductSettingsCard);
