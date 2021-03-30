import { Route, Switch } from 'react-router-dom';
import RootPage from '../container/RootPage/RootPage';
import DiscriptionPage from '../container/DiscriptionPage/DiscriptionPage';
import Login from '../container/User/Login/Login';
import Register from '../container/User/Register/Register';

const Routes = () => {
	return (
		<Switch>
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/product/:productID' component={DiscriptionPage} />
			<Route path='/' component={RootPage} />
		</Switch>
	);
};

export default Routes;
