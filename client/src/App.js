import { Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import LoginRegister from './components/UI/LoginRegister/LoginRegister';

const App = () => {
	return (
		<Switch>
			<Route path='/login' component={LoginRegister} />
			<Route path='/register' component={LoginRegister} />
			<Route path='/product/:productID' component={Index} />
			<Route path='/' component={Index} />
		</Switch>
	);
};

export default App;
