import styles from './ProductCard.module.css';

const ProductCard = (props) => {
	const srcSet = props.bigImage + ' 1280w,' + props.smallImage + ' 640w';

	return (
		<div className={styles.ProductCard}>
			<img
				className='productImage'
				src={props.smallImage}
				alt={props.productName}
				sizes='(min-width:769px) 1280px, 640px'
				srcSet={srcSet}
			/>
			<h3>{props.productName}</h3>
			<p>
				<strong>Rs.</strong> {props.price}
			</p>
		</div>
	);
};

export default ProductCard;
