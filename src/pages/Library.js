import React from 'react'
import { Link } from 'react-router-dom';
import smapleImage from '../images/logo2.jpeg'
import Navbar from '../components/Navbar'

function Librabry() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="sample">
                        <img src={smapleImage} alt="sample svg" className="sample-img"/>
                    <div className="sample-text">
                        <p>
                            the small but powerfull online tutorial library for young developers. ability to learn is the ability to grow in programming field.
                        </p>
                        <b>disclaimer: please note the full access to this library is open to paid costumers thank you.</b>
                    </div>
                </div>
            </div>

            <div className="libraries-cover">
                <div className="container">
                    <div className="libraries-list">
                        <div className="library-box">
                            <div className="library-name">selected reading</div>
                            <ul className="library-list">
                                <li className="library-item"><Link to="/developers" className="library-link">developers best practice</Link></li>
                                <li className="library-item"><Link to="/resume" className="library-link">effective resume writting</Link></li>
                            </ul>
                        </div>
                        <div className="library-box">
                            <div className="library-name">web development</div>
                            <ul className="library-list">
                                <li className="library-item"><Link to="/angular" className="library-link">learn angular js</Link></li>
                                <li className="library-item"><Link to="/ajax" className="library-link">learn ajax</Link></li>
                                <li className="library-item"><Link to="/bootstrap" className="library-link">learn bootstrap 4</Link></li>
                                <li className="library-item"><Link to="/css" className="library-link">learn CSS 3</Link></li>
                                <li className="library-item"><Link to="/flexbox" className="library-link">learn flexbox</Link></li>
                                <li className="library-item"><Link to="/html" className="library-link">learn Html 5</Link></li>
                                <li className="library-item"><Link to="/saas" className="library-link">learn saas</Link></li>
                                <li className="library-item"><Link to="/react" className="library-link">learn react js</Link></li>
                                <li className="library-item"><Link to="/vue" className="library-link">learn vue js</Link></li>
                            </ul>
                        </div>
                        <div className="library-box">
                            <div className="library-name">scripting language</div>
                            <ul className="library-list">
                                <li className="library-item"><Link to="/javascript" className="library-link">javaScript</Link></li>
                                <li className="library-item"><Link to="/jquery" className="library-link">jquery</Link></li>
                                <li className="library-item"><Link to="/php" className="library-link">learn php</Link></li>
                                <li className="library-item"><Link to="/python" className="library-link">learn python</Link></li>
                                <li className="library-item"><Link to="/perl" className="library-link">learn perl</Link></li>
                                <li className="library-item"><Link to="/ruby" className="library-link">learn ruby</Link></li>
                                <li className="library-item"><Link to="/vbscript" className="library-link">learn VBScript</Link></li>
                                <li className="library-item"><Link to="/dom" className="library-link">learn Dom</Link></li>
                                <li className="library-item"><Link to="/require" className="library-link">learn require js</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Librabry;
