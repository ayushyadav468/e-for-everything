import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../container/User/Login/Login';
import RootPage from '../container/RootPage/RootPage';
import ShopPage from '../container/ShopPage/ShopPage';
import CategoryPage from '../container/CategoryPage/CategoryPage';
import AboutPage from '../container/AboutPage/AboutPage';
import Register from '../container/User/Register/Register';
import DiscriptionPage from '../container/DiscriptionPage/DiscriptionPage';
import CartPage from '../container/CartPage/CartPage';
import FavouritePage from '../container/FavouritePage/FavouritePage';

const Routes = () => {
	const [search, setSearch] = useState('');

	// set seach
	const onSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	return (
		<Switch>
			<Route path='/login' render={() => <Login />} />
			<Route path='/register' render={() => <Register />} />
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
