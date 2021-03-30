import styles from './RootPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import Banner from '../../components/UI/Banner/Banner';
import ProductCards from '../../components/ProductCards/ProductCards';

const RootPage = () => {
	return (
		<div className={styles.rootPage}>
			<Navbar />
			<Banner />
			<ProductCards />
			<Footer />
		</div>
	);
};

export default RootPage;
