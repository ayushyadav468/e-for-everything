import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = (props) => {
	let linkURL;
	if (props.edit) {
		linkURL = '/user/product/' + props._id;
	} else {
		linkURL = '/product/' + props._id;
	}
	return (
		<Link to={linkURL} className={styles.productCard}>
			<img
				className={styles.productImage}
				src={props.smallImage}
				alt={props.productName}
			/>
			<h3 className={styles.productName}>{props.productName}</h3>
			<p className={styles.productPrice}>
				<strong>Rs.</strong> {props.productPrice}
			</p>
		</Link>
	);
};

export default ProductCard;
