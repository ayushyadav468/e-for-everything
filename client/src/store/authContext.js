import React, { useState } from 'react';

// AuthContext is how context api is structured
const AuthContext = React.createContext({
	token: '',
	isLoggedIn: false,
	logIn: (token) => {},
	logOut: () => {},
});

// All function are defined in AuthContextProvider
// Its a named export
export const AuthContextProvider = (props) => {
	// Get token from local storage, if it is not present initialToken = undefined
	const initialToken = localStorage.getItem('auth-token');
	const [token, setToken] = useState(initialToken);

	const isLoggedIn = !!token;
	const logInHandler = (token) => {
		setToken(token);
		localStorage.setItem('auth-token', token);
	};
	const logOutHandler = () => {
		setToken(null);
		localStorage.removeItem('auth-token');
	};
	const contextValue = {
		token: token,
		isLoggedIn: isLoggedIn,
		logIn: logInHandler,
		logOut: logOutHandler,
	};

	return (
		<AuthContextProvider value={contextValue}>
			{props.children}
		</AuthContextProvider>
	);
};

export default AuthContext;
