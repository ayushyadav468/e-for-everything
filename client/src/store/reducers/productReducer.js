import * as actionTypes from '../actions';

const initialState = [];

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCTS:
			state = [...action.payload];
			break;
		default:
			state = initialState;
	}
	return state;
};

export default productReducer;
