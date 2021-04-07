import { Link } from 'react-router-dom';
import styles from './CartCard.module.css';
import QuantityBox from '../../UI/QuantityBox/QuantityBox';

const CartCard = (props) => {
	// props: {
	//   product: { Details of product to be shown
	//     largeImage,
	//     smallImage,
	//     productName,
	//     productDiscription,
	//     productPrice,
	//   },
	//   productQuantity, state variable for quantity
	//   setProductQuantity(), state function for quantity change
	//   setShowDialogBox(), state function for dialog box
	//   deleteHandler(productID), function to handle delete button's on click
	// }

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
			<h3 className={styles.productName}>{props.product.productName}</h3>
			<p className={styles.productDiscription}>
				{props.product.productDiscription}
			</p>
			<QuantityBox
				productQuantity={props.productQuantity}
				setProductQuantity={props.setProductQuantity}
				dialogBox={(messageToBeDisplayed) =>
					props.dialogBox(messageToBeDisplayed)
				}
			/>
			<p className={styles.productPrice}>
				<strong>Rs</strong>
				{props.product.productPrice}
			</p>
			<button
				onClick={() => props.deleteHandler(props.product._id)}
				className={styles.productDelBtn}
			>
				Delete
			</button>
		</div>
	);
};

export default CartCard;
