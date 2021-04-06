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
			const user = { ...state };
			console.log(user);
			const newCartProducts = [
				...user.cartProducts.filter(
					(productID) => productID !== action.payload
				),
				action.payload,
			];
			console.log(newCartProducts);
			const newUser = { cartProducts: [...newCartProducts], ...user };
			console.log(newUser);
			state = { ...newUser };
			break;
		case actionTypes.DELETE_PRODUCT_FROM_CART:
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
