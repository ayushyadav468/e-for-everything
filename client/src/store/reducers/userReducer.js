import * as actionTypes from '../action/actions';

const initialState = {};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_USER:
			state = { ...action.payload };
			break;
		case actionTypes.REMOVE_USER:
			state = {};
			break;
		case actionTypes.ADD_PRODUCT_TO_CART:
			// check if productID is already in the cart
			// filter function retruns a new array
			// it checks if the id is present or not
			// if it is present don't add it again
			const addedCartProducts = [
				...state.cartProducts.filter(
					(productID) => productID !== action.payload
				),
				action.payload,
			];
			const addedCartProductNewUser = {
				...state,
				cartProducts: [...addedCartProducts],
			};
			// const addedCartProductNewUser = {
			// 	...state,
			//	This will also change the array immutablily as concat returns a new array
			// 	cartProducts: state.cartProducts.concat(action.payload),
			// };
			state = { ...addedCartProductNewUser };
			break;
		case actionTypes.DELETE_PRODUCT_FROM_CART:
			const deletedCartProducts = [
				...state.cartProducts.filter(
					(productID) => productID !== action.payload
				),
			];
			const deletedCartProductNewUser = {
				...state,
				cartProducts: [...deletedCartProducts],
			};
			state = { ...deletedCartProductNewUser };
			break;
		case actionTypes.ADD_PRODUCT_TO_FAV:
			// check if productID is already in the favourites
			// filter function retruns a new array
			// it checks if the id is present or not
			// if it is present don't add it again
			const addedFavProducts = [
				...state.favProducts.filter(
					(productID) => productID !== action.payload
				),
				action.payload,
			];
			const addedFavProductNewUser = {
				...state,
				favProducts: [...addedFavProducts],
			};
			// const deletedProductNewUser = {
			// 	...state,
			//	This will also change the array immutablily as concat returns a new array
			// 	cartProducts: state.cartProducts.concat(action.payload),
			// };
			state = { ...addedFavProductNewUser };
			break;
		case actionTypes.DELETE_PRODUCT_FROM_FAV:
			const deletedFavProducts = [
				...state.favProducts.filter(
					(productID) => productID !== action.payload
				),
			];
			const deletedFavProductNewUser = {
				...state,
				favProducts: [...deletedFavProducts],
			};
			state = { ...deletedFavProductNewUser };
			break;
		default:
			return state;
	}
	return state;
};

export default userReducer;
