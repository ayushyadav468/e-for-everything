import styles from './UserProducts.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import UserProductCards from '../../../components/UserProductCards/UserProductCards';

const UserProducts = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.userProductsContent}>
				<h2 className={styles.heading}>User products</h2>
				<UserProductCards {...props} />
			</div>
			<Footer />
		</>
	);
};

export default UserProducts;
