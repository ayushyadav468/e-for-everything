import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CartCard.module.css';

//* props: {
//*   product: { Details of product to be shown
//*     largeImage,
//*     smallImage,
//*     productName,
//*     productDiscription,
//*     productPrice,
//*   },
//*   productQuantity, state variable for quantity
//*   setProductQuantity(), state function for quantity change
//*   setShowDialogBox(), state function for dialog box
//*   deleteHandler(productID), function to handle delete button's on click
//* }

const CartCard = (props) => {
	const [productQuantity, setProductQuantity] = useState(0);
	const onQuantityChange = (type) => {
		switch (type) {
			case '-': {
				if (productQuantity > 0) {
					setProductQuantity(productQuantity - 1);
				} else {
					props.dialogBox("Can't reduce below 0");
				}
				break;
			}
			case '+': {
				setProductQuantity(productQuantity + 1);
				break;
			}
			default: {
				break;
			}
		}
		return;
	};

	const srcSet =
		props.product.largeImage + ' 1260w,' + props.product.smallImage + ' 640w';
	return (
		<div className={styles.cartCardDiv}>
			<Link
				to={'/product/' + props.product._id}
				className={styles.cartCardLink}
			>
				<img
					className={styles.productImage}
					src={props.product.smallImage}
					alt={props.product.productName}
					sizes='(min-width:769px) 1260px, 640px'
					srcSet={srcSet}
				/>
			</Link>
			<div className={styles.containerDiv}>
				<h3 className={styles.productName}>{props.product.productName}</h3>
				<p className={styles.productDiscription}>
					{props.product.productDiscription}
				</p>
				<div className={styles.quantityPriceDelDiv}>
					<div className={styles.quantityPriceDiv}>
						{/* Product quantity */}
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
						<p className={styles.productPrice}>
							<strong>Rs </strong>
							{props.product.productPrice}
						</p>
					</div>
					<button
						onClick={() => props.deleteHandler(props.product._id)}
						className={styles.productDelBtn}
					>
						<svg
							width='38'
							height='40'
							viewBox='0 0 38 40'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clipPath='url(#clip0)'>
								<path
									d='M29.8979 8.45292L29.1693 6.21918C28.8918 5.36843 28.1161 4.79679 27.2395 4.79679H21.1157V2.75772C21.1157 1.73856 20.3055 0.90918 19.3092 0.90918H13.7013C12.7053 0.90918 11.8948 1.73856 11.8948 2.75772V4.79679H5.77128C4.89436 4.79679 4.11866 5.36843 3.84121 6.21918L3.11258 8.45292C2.94667 8.96147 3.03076 9.52461 3.33716 9.95951C3.64357 10.3944 4.1393 10.6542 4.66349 10.6542H5.42509L7.10138 31.8538C7.226 33.4268 8.53118 34.6592 10.0733 34.6592H23.2774C24.8192 34.6592 26.1246 33.4268 26.249 31.8535L27.9253 10.6542H28.347C28.8712 10.6542 29.3669 10.3944 29.6733 9.95977C29.9797 9.52486 30.0638 8.96147 29.8979 8.45292ZM13.8284 2.88672H19.1821V4.79679H13.8284V2.88672ZM24.3217 31.6942C24.2779 32.248 23.8192 32.6816 23.2774 32.6816H10.0733C9.53146 32.6816 9.07274 32.248 9.02893 31.6942L7.36498 10.6542H25.9854L24.3217 31.6942ZM5.07815 8.67669L5.6756 6.84489C5.6892 6.80266 5.72772 6.77433 5.77128 6.77433H27.2395C27.283 6.77433 27.3213 6.80266 27.3351 6.84489L27.9326 8.67669H5.07815Z'
									fill='black'
								/>
								<path
									d='M21.2382 31.6237C21.2553 31.6248 21.2722 31.625 21.2893 31.625C21.8001 31.625 22.2271 31.2156 22.2538 30.6878L23.1617 12.8636C23.1894 12.3183 22.7795 11.853 22.2465 11.8247C21.712 11.7956 21.2586 12.2153 21.2306 12.7607L20.323 30.5848C20.2953 31.1301 20.7049 31.5954 21.2382 31.6237Z'
									fill='black'
								/>
								<path
									d='M10.8004 30.6909C10.8286 31.218 11.2551 31.6258 11.765 31.6258C11.7826 31.6258 11.8007 31.6253 11.8186 31.6243C12.3516 31.5947 12.7602 31.1286 12.7313 30.5833L11.7803 12.7591C11.7514 12.2138 11.2957 11.7959 10.7624 11.8257C10.2294 11.8553 9.82079 12.3214 9.84975 12.8668L10.8004 30.6909Z'
									fill='black'
								/>
								<path
									d='M16.5165 31.6259C17.0505 31.6259 17.4833 31.1832 17.4833 30.6371V12.813C17.4833 12.2668 17.0505 11.8242 16.5165 11.8242C15.9825 11.8242 15.5497 12.2668 15.5497 12.813V30.6371C15.5497 31.1832 15.9825 31.6259 16.5165 31.6259Z'
									fill='black'
								/>
							</g>
							<defs>
								<clipPath id='clip0'>
									<rect
										width='33'
										height='33.75'
										fill='white'
										transform='translate(0 0.90918)'
									/>
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
