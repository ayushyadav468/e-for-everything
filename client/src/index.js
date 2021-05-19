import './index.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Routes from './Routes/Routes';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './store/authContext';

const store = createStore(
	rootReducer,
	// to use chrome developer option redux extension
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const index = (
	// AuthContextProvider is Context API
	// It handle logIn, logOut and user authentication
	// <AuthContextProvider>
	//  Provider handle addToCart and addToFav
	<Provider store={store}>
		{/* BrowserRouter handle all the routes */}
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>
	// </AuthContextProvider>
);

ReactDOM.render(index, document.getElementById('root'));

reportWebVitals();
