import styles from './AboutPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';

const AboutPage = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.aboutPageContent}>
				<h2 className={styles.heading}>About Page</h2>
			</div>
			<Footer />
		</>
	);
};

export default AboutPage;
