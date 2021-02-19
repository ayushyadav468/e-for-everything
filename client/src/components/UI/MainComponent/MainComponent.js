import { Route, Switch } from 'react-router-dom';
import ProductCards from './ProductCards/ProductCards';
import DiscriptionCard from './DiscriptionCard/DiscriptionCard';

const MainComponent = (props) => {
	return (
		<div>
			<Switch>
				<Route path='/' exact component={ProductCards} />
				<Route path='/productID:id' component={DiscriptionCard} />
			</Switch>
		</div>
	);
};

export default MainComponent;
