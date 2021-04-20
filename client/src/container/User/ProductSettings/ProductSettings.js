import styles from './ProductSettings.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/UI/Footer/Footer';
import ProductSettingsCard from '../../../components/ProductSettingsCard/ProductSettingsCard';

const ProductSettings = (props) => {
	return (
		<>
			<Navbar {...props} />
			<div className={styles.productSettingsContent}>
				<h2 className={styles.heading}>Product settings</h2>
				<ProductSettingsCard {...props} />
			</div>
			<Footer />
		</>
	);
};

export default ProductSettings;
