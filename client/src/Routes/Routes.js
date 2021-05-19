import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/User/Login/Login';
import RootPage from '../pages/RootPage/RootPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import CartPage from '../pages/CartPage/CartPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import Register from '../pages/User/Register/Register';
import AddProduct from '../pages/User/AddProduct/AddProduct';
import FavouritePage from '../pages/FavouritePage/FavouritePage';
import UserProducts from '../pages/User/UserProducts/UserProducts';
import UserSettings from '../pages/User/UserSettings/UserSettings';
import DiscriptionPage from '../pages/DiscriptionPage/DiscriptionPage';
import ProductSettings from '../pages/User/ProductSettings/ProductSettings';

const Routes = () => {
	const [search, setSearch] = useState('');

	// set seach
	const onSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	return (
		<Switch>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/register'>
				<Register />
			</Route>
			<Route path='/cart'>
				<CartPage search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/fav'>
				<FavouritePage search={search} onSearchHandler={onSearchHandler} />
			</Route>
			{/* Restricted Routes for user */}
			<Route path='/user/setting'>
				<UserSettings search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/user/product/:productID'>
				<ProductSettings search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/user/product/add'>
				<AddProduct search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/user/product/'>
				<UserProducts search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/product/:productID'>
				<DiscriptionPage search={search} onSearchHandler={onSearchHandler} />
			</Route>
			{/* Un-restricted Routes for user */}
			<Route path='/shop'>
				<ShopPage search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/about'>
				<AboutPage search={search} onSearchHandler={onSearchHandler} />
			</Route>
			<Route path='/' exact>
				<RootPage search={search} onSearchHandler={onSearchHandler} />
			</Route>
			{/* 404 Page Not found will be redirected to RootPage */}
			<Route path='*'>
				<RootPage search={search} onSearchHandler={onSearchHandler} />
			</Route>
		</Switch>
	);
};

export default Routes;
