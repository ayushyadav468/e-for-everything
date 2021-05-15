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
	const initialToken = localStorage.getItem('token');
	const [token, setToken] = useState(initialToken);

	const isLoggedIn = !!token;
	const logInHandler = (token) => {
		setToken(token);
	};
	const logOutHandler = () => {
		setToken(null);
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
