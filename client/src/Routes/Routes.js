import { Route, Switch } from 'react-router-dom';
import Login from '../container/User/Login/Login';
import RootPage from '../container/RootPage/RootPage';
import Register from '../container/User/Register/Register';
import DiscriptionPage from '../container/DiscriptionPage/DiscriptionPage';
import CartPage from '../container/CartPage/CartPage';
import FavouritePage from '../container/FavouritePage/FavouritePage';

const Routes = () => {
	return (
		<Switch>
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/cart' component={CartPage} />
			<Route path='/fav' component={FavouritePage} />
			<Route path='/product/:productID' component={DiscriptionPage} />
			<Route path='/' component={RootPage} />
		</Switch>
	);
};

export default Routes;
