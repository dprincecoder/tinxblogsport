import { Edit } from '@material-ui/icons';
import React, { useState } from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';
import img from "./PhotoGrid_Plus_1605606730565.png";

const Dashboard = () => {
    const [username, setUsername] = useState("");
		const [email, setEmail] = useState("");
		const [file, setFile] = useState(null);
		const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    

    const handleUpdate = () => {}


    return (
			<div className="dashboard">
				<div className="dashboardWrapper">
					<div className="dashboardTitle">
						<span className="dashboardUpdateTitle">Update your Account</span>
						<span className="dashboardDeleteTitle">Delete Account</span>
					</div>
					<form className="dashboardForm" onSubmit={handleUpdate}>
						<label>Profile Picture</label>
						<div className="dashboardPP">
							<img src={img} alt="dashboard avatar" />
							<label htmlFor="fileInput">
								<Edit className="dashboardPPIcon" />
							</label>
							<input
								type="file"
								id="fileInput"
								style={{ display: "none" }}
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</div>
						<Link to="/users/232/publish" className="dashboardPublish">
							<h2>Publish New Article</h2>
						</Link>
						<label>Username:</label>
						<input
							type="text"
							placeholder="dprincecoder"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label>Email:</label>
						<input
							type="email"
							placeholder="dprincecoder@gmail.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Password:</label>
						<input
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit" className="dashboardSubmit">
							Update
						</button>
						{success && (
							<span
								style={{
									color: "green",
									textAlign: "center",
									marginTop: "10px",
								}}>
								Profile updated Succesfully
							</span>
						)}
					</form>
				</div>
			</div>
		);
}

export default Dashboard
