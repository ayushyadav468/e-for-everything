import ProductCards from './ProductCards/ProductCards';
// import DiscriptionCard from './DiscriptionCard/DiscriptionCard'

const MainComponent = (props) => {
	const onClickHandler = () => {
		console.log('Clicked');
	};

	return <ProductCards clicked={() => onClickHandler()} {...props} />;
};

export default MainComponent;
