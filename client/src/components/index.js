import { BrowserRouter } from 'react-router-dom';
import styles from './Index.module.css';
import MainComponent from './UI/MainComponent/MainComponent';
import Footer from './UI/Footer/Footer';

const Index = () => {
	return (
		<BrowserRouter>
			<div className={styles.ui}>
				<MainComponent />
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Index;
