import styles from './Index.module.css';
import Navbar from './UI/Navbar/Navbar';
import MainComponent from './UI/MainComponent/MainComponent';
import Footer from './UI/Footer/Footer';

const Index = (props) => {
	return (
		<div className={styles.ui}>
			<Navbar />
			<MainComponent match={props.match} />
			<Footer />
		</div>
	);
};

export default Index;
