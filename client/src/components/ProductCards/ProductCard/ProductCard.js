import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
	return (
		<Link to={'/product/' + props._id} className={styles.productCard}>
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
