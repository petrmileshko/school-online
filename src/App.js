import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

import Spinner from 'react-bootstrap/Spinner';

function App() {
	const { login, logout, token, userId, userAccess, ready } = useAuth();
	const isAuthenticated = !!token;
	const routes = useRoutes(isAuthenticated);

	if (!ready) {
		return (
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				token,
				login,
				logout,
				userId,
				userAccess,
				isAuthenticated,
			}}
		>
			<Router>
				<>{routes}</>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
