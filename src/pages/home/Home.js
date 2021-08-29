import React from "react";
import AllBlogs from "../../components/allblog/AllBlogs";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="sidebar">
					<Sidebar />
				<div className="sidebarContent">
				</div>
			</div>
			<div className="homeContent">
				<div className="allBlogs">
					<div className="allBlogsContent">
						<AllBlogs />
					</div>
				</div>
				<div className="trending">
					<div className="tredingContent">
						treding
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
