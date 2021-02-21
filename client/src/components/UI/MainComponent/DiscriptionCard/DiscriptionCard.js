import { useState, useEffect } from 'react';
import axios from '../../../../axiosInstance';
import styles from './DiscriptionCard.module.css';
import Spinner from '../../Spinner/Spinner';
import ReviewCards from './ReviewCards/ReviewCards';

const DiscriptionCard = (props) => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [productQuantity, setProductQuantity] = useState(0);
	// getting product id from URL
	const productID = props.match.params.productID;

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const result = await axios
				.get('/product/' + productID)
				.then((response) => {
					setProduct(response.data[0]);
				})
				.catch((err) => {
					console.log(err.data);
				});
			setIsLoading(false);
			return result;
		};

		fetchData();
	}, [productID]);

	const onQuantityChange = (type) => {
		switch (type) {
			case '-':
				if (productQuantity > 0) {
					setProductQuantity(productQuantity - 1);
				} else {
					console.log('Can not remove from zero');
				}
				break;
			case '+':
				setProductQuantity(productQuantity + 1);
				break;
			default:
				break;
		}
		return;
	};

	let discriptionCard;
	if (isLoading) {
		discriptionCard = <Spinner />;
	} else {
		const srcSet = product.bigImage + ' 1280w,' + product.smallImage + ' 640w';
		discriptionCard = (
			<div className={styles.productDiscriptionCard}>
				<div className={styles.productDiscriptionImageDiv}>
					<img
						className={styles.productImage}
						src={product.smallImage}
						alt={product.productName}
						sizes='(min-width:769px) 1280px, 640px'
						srcSet={srcSet}
					/>
				</div>
				<div className={styles.productDiscriptionDiv}>
					<h3 className={styles.productName}>{product.productName}</h3>
					<p className={styles.productDiscription}>{product.disp}</p>
					<div className={styles.productPriceAndRatingDiv}>
						<p className={styles.productPrice}>
							<strong>Rs.</strong> {product.price}
						</p>
						<p className={styles.productRating}>
							<strong>{product.rating}</strong>/5.0
						</p>
					</div>
					<div className={styles.productQuantity}>
						<button
							className={styles.productQuantityBtn}
							onClick={() => onQuantityChange('-')}
						>
							<strong>-</strong>
						</button>
						<p className={styles.productQuantityDisplay}>{productQuantity}</p>
						<button
							className={styles.productQuantityBtn}
							onClick={() => onQuantityChange('+')}
						>
							<strong>+</strong>
						</button>
					</div>
					<div className={styles.productBtnDiv}>
						<button
							className={[styles.productBtn, styles.productAddToCartBtn].join(
								' '
							)}
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
			</div>
		);
	}

	return (
		<div className={styles.productDiscriptionPage}>
			<h1 className={styles.productDiscriptionHeading}>Product Discription</h1>
			{discriptionCard}
			<ReviewCards reviews={product.reviews} />
		</div>
	);
};

export default DiscriptionCard;
