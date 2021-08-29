import React from "react";
import AllBlogs from "../../components/allblog/AllBlogs";
import "./home.css";

import { Link } from "react-router-dom";
import { FavoriteRounded } from "@material-ui/icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from "@material-ui/icons/Create";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import FaceIcon from "@material-ui/icons/Face";
import img from "./PhotoGrid_Plus_1605606730565.png";

const Home = () => {
	return (
		<div className="home">
			<div className="sidebar">
				<div className="sidebarContent">
					<div className="sidebarUserDetails">
						<img
							src={img}
							alt="user Avatar"
							className="sidebarUserDetailsAvatar"
						/>
						<h4 className="sidebarUserDetailsName">dprincecoder</h4>
					</div>
					<div className="sidebarUserOpt">
						<ul className="sidebarUserOptList">
							<Link to="/users/2423/favorite">
								<li className="sidebarUserOptItem">
									Favorite{" "}
									<span>
										<FavoriteRounded />
									</span>
								</li>
							</Link>
							<Link to="/users/2423/dashboard">
								<li className="sidebarUserOptItem">
									Dashboard{" "}
									<span>
										<DashboardIcon />
									</span>
								</li>
							</Link>
							<Link to="/users/2423/publish">
								<li className="sidebarUserOptItem">
									Publish{" "}
									<span>
										<CreateIcon />
									</span>
								</li>
							</Link>
						</ul>
					</div>
					<div className="sidebarAccount">
						<Link to="/login">
							<h3 className="sidebarAccountLogin">
								Login{" "}
								<span>
									<FaceIcon />
								</span>
							</h3>
						</Link>
						<Link to="/register">
							<h3 className="sidebarAccountLogin">
								Register{" "}
								<span>
									<FiberNewIcon />
								</span>
							</h3>
						</Link>
					</div>
				</div>
			</div>
			<div className="homeContent">
				<div className="allBlogs">
					<div className="allBlogsContent">
						<AllBlogs />
					</div>
				</div>
				<div className="trending">
					<div className="tredingContent">treding</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
