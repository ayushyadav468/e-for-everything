import './index.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import rootReducer from './store/rootReducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(
	rootReducer,
	// to use chrome developer option redux extension
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const index = (
	<BrowserRouter>
		<Provider store={store}>
			<Routes />
		</Provider>
	</BrowserRouter>
);

ReactDOM.render(index, document.getElementById('root'));

reportWebVitals();
