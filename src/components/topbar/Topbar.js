import { Search } from '@material-ui/icons'
import React from 'react'
import {Link } from 'react-router-dom'
import './topbar.css'
import img from './wal42.jpeg'

const Topbar = () => {
    return (
			<div className="topbar">
				<div className="topbarLogo">
					<img src={img} alt="brand logo" className="topbarImg"/>
					<div className="topbarBrand">TinX BlogSpot</div>
				</div>
				<div className="topbarItems">
                <ul className="topbarItemsList">
                    <Link to="/" >
						<li className="topbarItemsListLi active">Home</li>
                    </Link>
                    <Link to="/about">
						<li className="topbarItemsListLi">About</li>
                    </Link>
                    <Link to="/contact">
						<li className="topbarItemsListLi">Contact us</li>
                    </Link>
                    <Link to="/faq">
                    <li className="topbarItemsListLi">FAQ</li>
                    </Link>
                    <div className="topbarItemSearch">
                        <input type="search" name="" id="" className="topbarItemSearchInput" placeholder="Search for a Blog"/>
                        <button className="topbarItemSearchBtn">
                            <Search />
                        </button>
                    </div>
					</ul>
				</div>
			</div>
		);
}

export default Topbar
