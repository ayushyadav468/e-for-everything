import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../container/User/Login/Login';
import RootPage from '../container/RootPage/RootPage';
import ShopPage from '../container/ShopPage/ShopPage';
import CartPage from '../container/CartPage/CartPage';
import AboutPage from '../container/AboutPage/AboutPage';
import Register from '../container/User/Register/Register';
import AddProduct from '../container/User/AddProduct/AddProduct';
import CategoryPage from '../container/CategoryPage/CategoryPage';
import FavouritePage from '../container/FavouritePage/FavouritePage';
import UserProducts from '../container/User/UserProducts/UserProducts';
import UserSettings from '../container/User/UserSettings/UserSettings';
import DiscriptionPage from '../container/DiscriptionPage/DiscriptionPage';
import ProductSettings from '../container/User/ProductSettings/ProductSettings';

const Routes = () => {
	const [search, setSearch] = useState('');

	// set seach
	const onSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	return (
		<Switch>
			<Route path='/login' render={(routeProps) => <Login {...routeProps} />} />
			<Route
				path='/register'
				render={(routeProps) => <Register {...routeProps} />}
			/>
			{/* routeProps must be passed to rendered component
					to access history and location
			*/}
			<Route
				path='/cart'
				render={(routeProps) => (
					<CartPage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/fav'
				render={(routeProps) => (
					<FavouritePage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/user/setting'
				render={(routeProps) => (
					<UserSettings
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/user/product/:productID'
				render={(routeProps) => (
					<ProductSettings
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/user/product/add'
				render={(routeProps) => (
					<AddProduct
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/user/product/'
				render={(routeProps) => (
					<UserProducts
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/product/:productID'
				render={(routeProps) => (
					<DiscriptionPage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/shop'
				render={(routeProps) => (
					<ShopPage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/category'
				render={(routeProps) => (
					<CategoryPage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/about'
				render={(routeProps) => (
					<AboutPage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
			<Route
				path='/'
				render={(routeProps) => (
					<RootPage
						{...routeProps}
						search={search}
						onSearchHandler={onSearchHandler}
					/>
				)}
			/>
		</Switch>
	);
};

export default Routes;
