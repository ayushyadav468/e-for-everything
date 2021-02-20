import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
	productState: productReducer,
});

export default rootReducer;
