import * as actionTypes from '../action/actions';

const initialState = {};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGIN:
			state = { ...action.payload };
			break;
		case actionTypes.USER_LOGOUT:
			state = { ...initialState };
			break;
		default:
			state = initialState;
	}
	return state;
};

export default productReducer;
