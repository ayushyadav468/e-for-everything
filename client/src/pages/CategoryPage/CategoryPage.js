import styles from './CategoryPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';

const CategoryPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.categoryPageContent}>
				<h2 className={styles.heading}>Category Page</h2>
			</div>
			<Footer />
		</>
	);
};

export default CategoryPage;
