import styles from './ProductCard.module.css';

const ProductCard = (props) => {
	const srcSet = props.bigImage + ' 1280w,' + props.smallImage + ' 640w';

	return (
		<div className={styles.productCard}>
			<img
				className={styles.productImage}
				src={props.smallImage}
				alt={props.productName}
				sizes='(min-width:769px) 1280px, 640px'
				srcSet={srcSet}
			/>
			<h3 className={styles.productName}>{props.productName}</h3>
			<p className={styles.productPrice}>
				<strong>Rs.</strong> {props.price}
			</p>
		</div>
	);
};

export default ProductCard;
