import { Add } from '@material-ui/icons';
import React, { useState } from 'react'
import './publish.css'
const Publish = () => {
    const [title, setTitle] = useState("");
		const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    
    const handleSubmit = () => {}
    return (
        <div className="publish">
            <div className="publishContent">

				{file && (
					<img src={URL.createObjectURL(file)} alt="" className="publishImg" />
				)}
				<form className="publishForm" onSubmit={handleSubmit}>
					<div className="publishFormGroup">
						<label htmlFor="fileInput">
							<Add className="publishIcon" />
						</label>
						<input
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<input
							type="text"
							placeholder="Title"
							className="publishInput"
							autoFocus={true}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="publishFormGroup">
						<textarea
							placeholder="Publish a new story..."
							type="text"
							className="publishInput publishText"
							onChange={(e) => setDesc(e.target.value)}></textarea>
					</div>
					<button className="publishSubmit" type="submit">
						Publish
					</button>
				</form>
            </div>
			</div>
		);
}

export default Publish
