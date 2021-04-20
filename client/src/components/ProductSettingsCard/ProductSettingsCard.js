import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axiosInstance';
import DialogBox from '../UI/DialogBox/DialogBox';
import styles from './ProductSettingsCard.module.css';

const mapStateToProps = (state) => {
	return {
		user: state.user,
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
	if (
		Object.keys(props.user).length !== 0 &&
		props.user.constructor === Object
	) {
		userID = props.user._id;
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
		await axios
			.get('/api/product/' + productID)
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
		} else {
			setMessage('Please login');
		}
	}, [productID, userID]);

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
			<h4 className={styles.productSettingsCardHeading}>Edit</h4>
			<form
				className={styles.productSettingsCardContainer}
				onSubmit={productUpdateHandler}
			>
				<div className={styles.nameDiv}>
					<label>
						Product Name
						<input
							type='text'
							value={productName}
							onChange={(event) => onProductNameChangeHandler(event)}
						/>
					</label>
					<label>
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
						value={productDiscription}
						onChange={(event) => onProductDiscriptionChangeHandler(event)}
					/>
				</label>
				<input type='submit' value='Save' />
			</form>
			<DialogBox showBox={showDialogBox}>{message}</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, null)(ProductSettingsCard);
