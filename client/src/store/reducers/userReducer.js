import * as actionTypes from '../action/actions';

const getTokenFromLocalStorage = () => {
	const token = localStorage.getItem('auth-token');
	if (token !== 'undefined') {
		return token;
	} else {
		return null;
	}
};

const initialState = {
	token: getTokenFromLocalStorage(),
	isLoggedIn: !!getTokenFromLocalStorage(),
	userData: {},
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_USER: {
			const token = action.payload.token;
			const isLoggedIn = !!token;
			const userData = { ...action.payload.userData };
			localStorage.setItem('auth-token', token);
			state = { token: token, isLoggedIn: isLoggedIn, userData: userData };
			break;
		}
		case actionTypes.REMOVE_USER: {
			localStorage.removeItem('auth-token');
			state = {
				token: null,
				isLoggedIn: false,
				userData: {},
			};
			break;
		}
		case actionTypes.ADD_PRODUCT_TO_CART: {
			// check if productID is already in the cart
			// filter function retruns a new array
			// it checks if the id is present or not
			// if it is present don't add it again
			const addedCartProducts = [
				...state.userData.cartProducts.filter(
					(productID) => productID !== action.payload
				),
				action.payload,
			];
			const addedCartProductNewUser = {
				...state.userData,
				cartProducts: [...addedCartProducts],
			};
			// alternative method
			// const addedCartProductNewUser = {
			// 	...state,
			//	This will also change the array immutablily as concat returns a new array
			// 	cartProducts: state.cartProducts.concat(action.payload),
			// };
			state = { ...state, userData: { ...addedCartProductNewUser } };
			break;
		}
		case actionTypes.DELETE_PRODUCT_FROM_CART: {
			const deletedCartProducts = [
				...state.userData.cartProducts.filter(
					(productID) => productID !== action.payload
				),
			];
			const deletedCartProductNewUser = {
				...state.userData,
				cartProducts: [...deletedCartProducts],
			};
			state = { ...state, userData: { ...deletedCartProductNewUser } };
			break;
		}
		case actionTypes.ADD_PRODUCT_TO_FAV: {
			// check if productID is already in the favourites
			// filter function retruns a new array
			// it checks if the id is present or not
			// if it is present don't add it again
			const addedFavProducts = [
				...state.userData.favProducts.filter(
					(productID) => productID !== action.payload
				),
				action.payload,
			];
			const addedFavProductNewUser = {
				...state.userData,
				favProducts: [...addedFavProducts],
			};
			// alternative method
			// const deletedProductNewUser = {
			// 	...state,
			//	This will also change the array immutablily as concat returns a new array
			// 	cartProducts: state.cartProducts.concat(action.payload),
			// };
			state = { ...state, userData: { ...addedFavProductNewUser } };
			break;
		}
		case actionTypes.DELETE_PRODUCT_FROM_FAV: {
			const deletedFavProducts = [
				...state.userData.favProducts.filter(
					(productID) => productID !== action.payload
				),
			];
			const deletedFavProductNewUser = {
				...state.userData,
				favProducts: [...deletedFavProducts],
			};
			state = { ...state, userData: { ...deletedFavProductNewUser } };
			break;
		}
		default: {
			return state;
		}
	}
	return state;
};

export default userReducer;
