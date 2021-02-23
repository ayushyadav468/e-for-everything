import styles from './MainComponent.module.css';
import Banner from './Banner/Banner';
import ProductCards from './ProductCards/ProductCards';
import DiscriptionCard from './DiscriptionCard/DiscriptionCard';

const MainComponent = (props) => {
	const path = props.match.path;
	console.log(path);
	let component;
	if (path === '/') {
		component = (
			<div style={{ widht: '100%' }}>
				<Banner />
				<ProductCards {...props} />
			</div>
		);
	} else if (path === '/product/:productID') {
		console.log('Enter else if');
		component = (
			<div style={{ widht: '100%' }}>
				<DiscriptionCard {...props} />
			</div>
		);
	} else {
		component = (
			<div style={{ widht: '100%' }}>
				<h3 style={{ textAlign: 'center' }}>This path is not avaliable</h3>
			</div>
		);
	}

	return <div className={styles.mainComponent}>{component}</div>;
};

export default MainComponent;
