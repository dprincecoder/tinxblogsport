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
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/favourite">
						<Faq />
					</Route>
					<Route path="/login">
						<Faq />
					</Route>
					<Route path="/register">
						<Faq />
					</Route>
					<Route path="/publish">
						<Faq />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App
