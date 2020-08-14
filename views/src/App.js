import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";

function App() {
	return ( 
		<Router>
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/profile">
					<Layout />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;