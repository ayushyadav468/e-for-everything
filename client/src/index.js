import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/rootReducer';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const index = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(index, document.getElementById('root'));

reportWebVitals();
