import styles from './UserProducts.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import UserProductCards from '../../../components/User/UserProductCards/UserProductCards';

const UserProducts = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.userProductsContent}>
				<UserProductCards {...props} />
			</div>
			<Footer />
		</>
	);
};

export default UserProducts;
