import React, { useRef } from 'react'
import './login.css'
import { Link } from "react-router-dom";

const Login = () => {
    const isFetching = false;
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const handleSubmit = () => {}
    return (
        <div className="login">
            <div className="loginContent">

				<span className="loginTitle">Login</span>
				<form className="loginForm" onSubmit={handleSubmit}>
					<label>Username:</label>
					<input
						type="text"
						className="loginInput"
						placeholder="Enter your username"
						ref={usernameRef}
					/>
					<label>Password:</label>
					<input
						type="password"
						className="loginInput"
						placeholder="Enter your password"
						ref={passwordRef}
					/>
					<button type="submit" className="loginButton" disabled={isFetching}>
						Login
					</button>
				</form>
				<button className="loginRegisterButton">
					<Link to="/register" className="link">
						Register
					</Link>
				</button>
            </div>
			</div>
		);
}

export default Login
