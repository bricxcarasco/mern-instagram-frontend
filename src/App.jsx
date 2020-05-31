import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/templates/Navbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin';
import Profile from './components/pages/Profile';
import CreatePost from './components/pages/CreatePost';

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
			<Route path="/create">
				<CreatePost />
			</Route>
		</BrowserRouter>
	);
}

export default App;
