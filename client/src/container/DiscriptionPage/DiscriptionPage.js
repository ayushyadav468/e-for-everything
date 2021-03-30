import styles from './DiscriptionPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';
import DiscriptionCard from '../../components/DiscriptionCard/DiscriptionCard';

const DiscriptionPage = (props) => {
	return (
		<div className={styles.dispPage}>
			<Navbar />
			<DiscriptionCard {...props} />
			<Footer />
		</div>
	);
};

export default DiscriptionPage;
