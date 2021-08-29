import { Link } from 'react-router-dom'
import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
    return (
			<div className="sidebar">
				<div className="sidebarUserDetails">
					<img src="" alt="" className="sidebarUserDetailsAvatar" />
					<h4 className="sidebarUserDetailsName">Dprincecoder</h4>
				</div>
				<div className="sidebarUserOpt">
					<ul className="sidebarUserOptList">
						<Link to="/users/2423/favorite">
							<li className="sidebarUserOptItem">Favorite</li>
						</Link>
						<Link to="/users/2423/dashboard">
							<li className="sidebarUserOptItem">Dashboard</li>
						</Link>
						<Link to="/users/2423/publish">
							<li className="sidebarUserOptItem">Publish</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarAccount">
					<Link to="/login">
						<span className="sidebarAccountLogin">Login</span>
					</Link>
					<Link to="/register">
						<span className="sidebarAccountLogin">Register</span>
					</Link>
				</div>
			</div>
		);
}

export default Sidebar
