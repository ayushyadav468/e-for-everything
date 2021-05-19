import styles from './ShopPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import ProductCards from '../../components/Product/ProductCards/ProductCards';

const ShopPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.shopPageContent}>
				<h2 className={styles.heading}>Products</h2>
				<ProductCards search={props.search} />
			</div>
			<Footer />
		</>
	);
};

export default ShopPage;
