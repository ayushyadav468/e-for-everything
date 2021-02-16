import ProductCard from './ProductCard/ProductCard';
import styles from './ProductCards.module.css';

const ProductCards = (props) => {
	const products = props.products;
	let cards = products.map((product) => {
		return <ProductCard key={product.id} {...product} />;
	});
	return (
		<div className='Project_Card_Container' style={{ width: '100%' }}>
			<h2 className={styles.productHeading}>Featured Products</h2>
			<div className={styles.productCards}>{cards}</div>
		</div>
	);
};

export default ProductCards;
