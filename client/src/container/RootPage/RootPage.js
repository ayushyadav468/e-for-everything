import styles from './RootPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import Banner from '../../components/UI/Banner/Banner';
import ProductCards from '../../components/Product/ProductCards/ProductCards';

const RootPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.rootPageContent}>
				<Banner />
				<h2 className={styles.heading}>Featured Products</h2>
				<ProductCards search={props.search} />
			</div>
			<Footer />
		</>
	);
};

export default RootPage;
