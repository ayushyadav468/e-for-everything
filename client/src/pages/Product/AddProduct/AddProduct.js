import styles from './AddProduct.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import AddProductCard from '../../../components/Product/AddProductCard/AddProductCard';

const AddProduct = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.addProductContent}>
				<AddProductCard {...props} />
			</div>
			<Footer />
		</>
	);
};

export default AddProduct;
