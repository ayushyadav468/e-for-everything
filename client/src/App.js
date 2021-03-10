import { Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/UI/Login&Register/Login';
import Register from './components/UI/Login&Register/Register';

const App = () => {
	return (
		<Switch>
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/product/:productID' component={Index} />
			<Route path='/' component={Index} />
		</Switch>
	);
};

export default App;
