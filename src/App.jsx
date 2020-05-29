import React from 'react';
import Navbar from './components/templates/Navbar';
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/signin">
				<Signin />
			</Route>
			<Route path="/signup">
				<Signup />
			</Route>
			<Route path="/profile">
				<Profile />
			</Route>
		</BrowserRouter>
	);
}

export default App;
