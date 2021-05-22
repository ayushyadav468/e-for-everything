import { connect } from 'react-redux';
import { useState } from 'react';

import axios from '../../../axiosInstance';
import DialogBox from '../../UI/DialogBox/DialogBox';
import styles from './AddProductCard.module.css';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const AddProductCard = (props) => {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState(0);
	const [smallImage, setSmallImage] = useState('');
	const [largeImage, setLargeImage] = useState('');
	const [productDiscription, setProductDiscription] = useState('');

	const [showDialogBox, setShowDialogBox] = useState(false);
	const [message, setMessage] = useState('');

	const isLoggedIn = props.userState.isLoggedIn;

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

	const addProductHandler = async (event) => {
		event.preventDefault();
		const newProduct = {
			productName: productName,
			productPrice: productPrice,
			smallImage: smallImage,
			largeImage: largeImage,
			productDiscription: productDiscription,
		};
		const token = props.userState.token;
		await axios({
			method: 'POST',
			url: `/api/auth/product/`,
			headers: {
				'content-type': 'application/json',
				'auth-token': token,
			},
			data: {
				...newProduct,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data);
					dialogBox('Product added');
				} else {
					console.log(response.data?.error.message);
				}
			})
			.catch((error) => {
				console.log(error.response.data?.error.message);
				dialogBox('Product not added. Try again');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
	};

	return (
		<div className={styles.addProductCard}>
			{/* <h2 className={styles.heading}>Product settings</h2> */}
			{isLoggedIn ? (
				<div className={styles.addProductContainer}>
					<h4 className={styles.addProductCardHeading}>Add Product</h4>
					<form className={styles.addProductForm} onSubmit={addProductHandler}>
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
			) : (
				<div className={styles.addProductContainer}>
					<p className={styles.logInPara}>
						Please login before adding a product
					</p>
				</div>
			)}
			<DialogBox showBox={showDialogBox} setShowDialogBox={setShowDialogBox}>
				{message}
			</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, null)(AddProductCard);
