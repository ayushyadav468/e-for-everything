import { Route, Switch } from 'react-router-dom';
import Index from './components/Index';

const App = () => {
	return (
		<Switch>
			<Route path='/product/:productID' component={Index} />
			<Route path='/' component={Index} />
		</Switch>
	);
};

export default App;
