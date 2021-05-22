import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from '../../../axiosInstance';
import DialogBox from '../../UI/DialogBox/DialogBox';
import styles from './EditProductCard.module.css';

const mapStateToProps = (state) => {
	return {
		userState: state.userState,
	};
};

const EditProductCard = (props) => {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState(0);
	const [smallImage, setSmallImage] = useState('');
	const [largeImage, setLargeImage] = useState('');
	const [productDiscription, setProductDiscription] = useState('');

	const [showDialogBox, setShowDialogBox] = useState(false);
	const [message, setMessage] = useState('');

	const isLoggedIn = props.userState.isLoggedIn;
	const productID = useParams().productID;

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
				if (response.status === 200) {
					setProductData(response.data.product);
				} else {
					console.log(response.data?.error.message);
				}
			})
			.catch((error) => {
				console.log(error.response.data?.error.message);
			});
	};

	useEffect(() => {
		if (isLoggedIn) {
			fetchProductData();
		}
		// clean up function
		return () => {
			setProductName('');
			setProductPrice(0);
			setSmallImage('');
			setLargeImage('');
			setProductDiscription('');
		};
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

	const productUpdateHandler = async (event) => {
		event.preventDefault();
		const updatedProduct = {
			productName: productName,
			productPrice: productPrice,
			smallImage: smallImage,
			largeImage: largeImage,
			productDiscription: productDiscription,
		};
		const token = props.userState.token;
		await axios({
			method: 'PATCH',
			url: `/api/auth/product/${productID}`,
			headers: {
				'content-type': 'application/json',
				'auth-token': token,
			},
			data: {
				...updatedProduct,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data);
					dialogBox('Product updated');
				} else {
					console.log(response.data?.error.message);
				}
			})
			.catch((error) => {
				console.log(error.response.data?.error.message);
				dialogBox('Product not updated. Try again');
			});
	};

	const dialogBox = (messageToBeDisplayed) => {
		setShowDialogBox(true);
		setMessage(messageToBeDisplayed);
	};

	return (
		<div className={styles.editProductCard}>
			{/* <h2 className={styles.heading}>Product settings</h2> */}
			<div className={styles.editProductContainer}>
				<h4 className={styles.editProductCardHeading}>Edit</h4>
				<form
					className={styles.editProductForm}
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
			<DialogBox showBox={showDialogBox} setShowDialogBox={setShowDialogBox}>
				{message}
			</DialogBox>
		</div>
	);
};

export default connect(mapStateToProps, null)(EditProductCard);
