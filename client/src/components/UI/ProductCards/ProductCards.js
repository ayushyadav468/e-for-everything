// import axios from '../../../axios';
import ProductCard from './ProductCard/ProductCard';
import styles from './ProductCards.module.css';

const ProductCards = () => {
	return (
		<div className={styles.ProductCards}>
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	);
};

export default ProductCards;
