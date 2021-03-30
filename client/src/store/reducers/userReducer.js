import * as actionTypes from '../action/actions';

// const initialState = {};

const productReducer = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			state = { ...action.payload };
			break;
		case actionTypes.USER_LOGOUT:
			state = {};
			break;
		default:
			state = {};
	}
	return state;
};

export default productReducer;
