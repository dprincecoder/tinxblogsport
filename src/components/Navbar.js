import React, { useState } from 'react';
import avater from '../images/logo.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WorkIcon from '@material-ui/icons/Work';
import NewReleaseIcon from '@material-ui/icons/NewReleases';

function Navbar() {

    
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
        setNavToggle(!navToggle);
    }
    return (
        <div>
             <nav className="nav-menu">
                        <div className="logo-cont">
                             <Link to="/" className="nav-link"><img className="logo" src={avater} alt="Web logo" /></Link>
                        </div>
                        <div className="open-menu" onClick={navClick}>
                        <MenuIcon/>
                         </div>
                    <ul className={`nav-list ${navToggle ? "open-list" : ""}`}>
                        <li className="nav-item second-child">
                           <Link to="/tools" className="nav-link"><CodeIcon/>Tools</Link>
                        </li>
                        <li className="nav-item">
                           <a href="https://stackoverflow.com/jobs" className="nav-link" target="_blank"><WorkIcon/>Jobs</a>
                        </li>
                        <li className="nav-item">
                           <Link to="/library" className="nav-link lib"><LibraryBooksIcon/>Library</Link>
                        </li>
                        <li className="nav-item">
                           <a href="https://developers.google.com/" className="nav-link" target="_blank"><DeveloperModeIcon/>Developer's</a>
                        </li>
                        <li className="nav-item">
                           <a href="https://news.google.com/topstories?hl=en-US&gl=US&ceid=US%3Aen" className="nav-link" target="_blank"><NewReleaseIcon/>news</a>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar;
