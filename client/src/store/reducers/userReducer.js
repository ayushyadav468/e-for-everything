import * as actionTypes from '../action/actions';

const initialState = {};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			state = { ...action.payload };
			break;
		case actionTypes.USER_LOGOUT:
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
			const addedProductNewUser = {
				...state,
				cartProducts: [...addedCartProducts],
			};
			// const deletedProductNewUser = {
			// 	...state,
			//	This will also change the array immutablily as concat returns a new array
			// 	cartProducts: state.cartProducts.concat(action.payload),
			// };
			state = { ...addedProductNewUser };
			break;
		case actionTypes.DELETE_PRODUCT_FROM_CART:
			const deletedCartProducts = [
				...state.cartProducts.filter(
					(productID) => productID !== action.payload
				),
			];
			const deletedProductNewUser = {
				...state,
				cartProducts: [...deletedCartProducts],
			};

			state = { ...deletedProductNewUser };
			break;
		case actionTypes.ADD_PRODUCT_TO_FAV:
			break;
		case actionTypes.DELETE_PRODUCT_FROM_FAV:
			break;
		default:
			return state;
	}
	return state;
};

export default userReducer;
