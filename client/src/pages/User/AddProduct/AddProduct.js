import styles from './AddProduct.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import UserProductCards from '../../../components/User/UserProductCards/UserProductCards';

const AddProduct = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.addProductContent}>
				<UserProductCards {...props} />
			</div>
			<Footer />
		</>
	);
};

export default AddProduct;
