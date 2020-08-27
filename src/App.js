import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext';

function App() {
	const {login, logout, token, userId, userAccess} = useAuth();
	const isAuthenticated = !!token;
	const routes = useRoutes(isAuthenticated);

	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, userAccess, isAuthenticated
		}}>
			<Router>
				<>{ routes }</>
			</Router>
		</AuthContext.Provider>
	)
}

export default App;