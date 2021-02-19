import { BrowserRouter } from 'react-router-dom';
import styles from './Index.module.css';
import MainComponent from './UI/MainComponent/MainComponent';

const Index = () => {
	return (
		<BrowserRouter>
			<div className={styles.ui}>
				<MainComponent />
			</div>
		</BrowserRouter>
	);
};

export default Index;
