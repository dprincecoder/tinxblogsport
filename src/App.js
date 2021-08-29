import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import SingleBlog from './components/singleblog/SingleBlog';
import Contact from './pages/contact/Contact';
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Dashboard from "./pages/dashboard/Dashboard";
import Favorite from "./pages/favorite/Favorite";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";
import Publish from "./pages/publish/Publish";



const App = () => {
  return (
		<div className="App">
			<Router>
				<Topbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/blog/:blogId">
						<SingleBlog />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/faq">
						<Faq />
					</Route>
					<Route path="/users/:userId/dashboard">
						<Dashboard />
					</Route>
					<Route path="/users/:blogId/favorite">
						<Favorite/>
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/users/:userId/publish">
						<Publish />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App
