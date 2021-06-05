import React from 'react'
import Navbar from '../components/Navbar';
import vscode from '../images/vscode.jpg';
import notepad from '../images/notepad++.jpg';
import Atom from '../images/atom.jpg';
import brackets from '../images/brackets.jpg';
import vim from '../images/vim.png';
import ArrowUpwardIcons from '@material-ui/icons/ArrowUpward';

function Tools() {
    return (
        <div>
            <Navbar/>
            <div className="editor-main-text">
                <div className="container">
                    <h1>5 Best FREE Code Editor Software for Windows & Mac (2021)</h1>
                    <p>
                        Every year, many new Code Editors are launched, and the developer finds it challenging to choose one. Following is a curated list of Top 5 source code and text editor software for Windows and Mac platforms. All the editors in the list are Free to use. The code editor could be standalone or integrated into an IDE
                    </p>
                    <b>disclaimer: please dear users, note that the code editors posted here is for educational purposes. we the the owner of this site will not be held accountable for any harm our site will cause for using it even the external link shared here thank you. </b>
                </div>
            </div>
            <div className="editors">
                <div className="container">
                
                <div className="editor-image">
                    <img src={vscode} alt="editor image" className="editor-img"/>
                </div>
                <div className="editor-name">(1) vs code</div>
                <div className="editor-text">
                    <p>Visual Studio Code is an open source code editor software developed by Microsoft. This free text editor offers built-in support for TypeScript, JavaScript, and Node.js. It's autocompleted with IntelliSense features provides smart completions based on variable types, essential modules, and function definitions.
                    </p>
                    <div className="editor-platform"><b>Platform:</b> windows, mac and kali linux</div>
                    <div className="editor-platform"><b>price:</b> free</div>
                    <div className="editor-feature"><b>feature:</b>
                        <ul className="editor-list">
                            <li className="editor-item">This free text editor supports syntax highlighting for languages like PHP, JavaScript, HTML, and CSS</li>
                            <li className="editor-item">Easy working with Git and other SCM (Software Configuration management) providers</li>
                            <li className="editor-item">Code refactoring & debugging</li>
                            <li className="editor-item">This code editor for Mac is easily extensible and customizable</li>
                        </ul>
                        <div>Download link:
                             <a className="editor-link" href="https://code.visualstudio.com/"> https://code.visualstudio.com/</a>
                       </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="editors">
                <div className="container">
                <div className="editor-image">
                    <img src={notepad} alt="editor image" className="editor-img"/>
                </div>
                <div className="editor-name">(2) Notepad++</div>
                <div className="editor-text">
                    <p>
                        Notepad++ is a popular free to use code editor written in C++. It uses pure win32 API which offers greater execution speed and small program size. It is one of the best code editor that runs only in the window's environment, and it uses GPL License.
                    </p>
                    <div className="editor-platform"><b>Platform:</b> windows</div>
                    <div className="editor-platform"><b>price:</b> free</div>
                    <div className="editor-feature"><b>feature:</b>
                        <ul className="editor-list">
                            <li className="editor-item">This free text editor supports syntax highlighting for languages like PHP, JavaScript, HTML, and CSS</li>
                            <li className="editor-item">Auto-completion: Word completion, Function completion</li>
                            <li className="editor-item">This free code editor provides macro recording and playback</li>
                            <li className="editor-item">User-defined Syntax highlighting and folding</li>
                            <li className="editor-item">Entirely customizable GUI</li>
                            <li className="editor-item">Multi-view and Multi-Language support</li>
                        </ul>
                        <div>Download link: 
                             <a className="editor-link" href="https://notepad-plus-plus.org/"> https://notepad-plus-plus.org/</a>
                       </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="editors">
                <div className="container">
                <div className="editor-image">
                    <img src={Atom} alt="editor image" className="editor-img"/>
                </div>
                <div className="editor-name">(3) atom</div>
                <div className="editor-text">
                    <p>Atom is useful code editor tool preferred by programmers due to its simple interface compared to the other editors. Atom users can submit packages and them for the software.
                    </p>
                    <div className="editor-platform"><b>Platform:</b> windows, mac and kali linux</div>
                    <div className="editor-platform"><b>price:</b> free</div>
                    <div className="editor-feature"><b>feature:</b>
                        <ul className="editor-list">
                            <li className="editor-item">Package Manager Integrated for Plugins support</li>
                            <li className="editor-item">The feature of smart autocompletion</li>
                            <li className="editor-item">Supports Command Palette</li>
                            <li className="editor-item">Multiple panes</li>
                            <li className="editor-item">This Mac code editor allows cross-platform editing</li>
                        </ul>
                        <div>Download link: 
                             <a className="editor-link" href=" https://atom.io/"> https://atom.io/</a>
                       </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="editors">
                <div className="container">
                <div className="editor-image">
                    <img src={vim} alt="editor image" className="editor-img"/>
                </div>
                <div className="editor-name">(4) vim</div>
                <div className="editor-text">
                    <p>Vim is an advanced text editor open source tool which is also considered to be an IDE in its way. This tool allows managing your text editing activities with vim editors and UNIX System which can be used on-premise or online.
                    </p>
                    <div className="editor-platform"><b>Platform:</b> kali linux</div>
                    <div className="editor-platform"><b>price:</b> free</div>
                    <div className="editor-feature"><b>feature:</b>
                        <ul className="editor-list">
                            <li className="editor-item">Extensive plugin support</li>
                            <li className="editor-item">Powerful search and replace</li>
                            <li className="editor-item">This programming editor integrates with many tools</li>
                            <li className="editor-item">Macro recording and playback</li>
                            <li className="editor-item">Support for hundreds of programming languages and file formats</li>
                        </ul>
                        <div >Download link: 
                             <a className="editor-link" href=" https://atom.io/"> https://atom.io/</a>
                       </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="editors">
                <div className="container">
                <div className="editor-image">
                    <img src={brackets} alt="editor image" className="editor-img"/>
                </div>
                <div className="editor-name">(5) brackets</div>
                <div className="editor-text">
                    <p>Brackets is a lightweight, yet powerful, modern text editor. Which blend visual tools into the editor so you get the right amount of help when you want it without getting in the way of your creative process. You'll enjoy writing code in Brackets.
                    </p>
                    <div className="editor-platform"><b>Platform:</b>wibdows, mac & kali linux</div>
                    <div className="editor-platform"><b>price:</b> free</div>
                    <div className="editor-feature"><b>feature:</b>
                        <ul className="editor-list">
                            <li className="editor-item">live preview</li>
                            <li className="editor-item">inline editors</li>
                            <li className="editor-item">preprocessor</li>
                            
                        </ul>
                        <div>Download link: 
                             <a className="editor-link" href="https://google.com/search?q=brackets">no best link to download ask (google)</a>
                            </div>
                    </div>
                    </div>
                    <div className="go-up">
                        <a href="#" className="gotoupbtn">
                                 <ArrowUpwardIcons className="up"/>
                            </a>
                             </div>
                    </div>
            </div>
        </div>
    )
}

export default Tools;
