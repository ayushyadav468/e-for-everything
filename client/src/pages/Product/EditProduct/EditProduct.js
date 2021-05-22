import styles from './EditProduct.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import EditProductCard from '../../../components/Product/EditProductCard/EditProductCard';

const ProductSettings = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.editProductContent}>
				<h2 className={styles.heading}>Product settings</h2>
				<EditProductCard {...props} />
			</div>
			<Footer />
		</>
	);
};

export default ProductSettings;
