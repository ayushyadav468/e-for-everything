import styles from './FavouritePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';

const FavouritePage = () => {
	return (
		<div className={styles.favPage}>
			<Navbar />
			<h1>Favourite</h1>
			<Footer />
		</div>
	);
};

export default FavouritePage;
