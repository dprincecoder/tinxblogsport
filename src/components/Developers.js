import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import practiceImg from '../images/dev-screen.jpg'
import ArrowUpwardIcons from '@material-ui/icons/ArrowUpward';

function Developers() {
    return (
        <div>
            <Navbar/>
            <div className="developers">
                <div className="container">
                <h1 className="dev-sidebar-name">Developers best practice</h1>
                 <div className="sidebar">
                <div className="dev-sidebar-image">
                    <img src={practiceImg} alt="practice image" className="dev-sidebar-img"/>
                </div>
                <ul className="dev-sidebar-list">
                    <h3>keypoints & quick navigate</h3>       
                    <li className="dev-sidebar-item">
                        <a className="dev-sidebar-link" href="#what_practice">What is practice</a>
                    </li>
                    <li className="dev-sidebar-item">
                        <a className="dev-sidebar-link" href="#code_read">code & read</a>
                    </li>
                    <li className="dev-sidebar-item">
                        <a className="dev-sidebar-link" href="#document">keeping document is the key</a>
                    </li>
                    <li className="dev-sidebar-item">
                        <a className="dev-sidebar-link" href="#code_to_viewed">code to be reviewed</a>
                    </li>
                    <li className="dev-sidebar-item">
                        <a className="dev-sidebar-link" href="#keepItSafe">store your code safe</a>
                    </li>
                    <li className="dev-sidebar-item">
                        <a className="dev-sidebar-link" href="#persistant">persistant</a>
                    </li>
                </ul>
                        
                    </div>
                </div>    

                <div className="developer-mainbar" id="what_practice">
                    <div className="container">
                        <h4>practice</h4>
                        <div className="mainbar-text">
                            <p>
                                in this article lets discuss about practicing and practicing in programming. programming as an average person thinks, is easy, luxury, but never did they know is hard work and hard work comes from practicing. One of the most important attributes of practice is that it forces you not to divert from what you used to do.
                                <small>shooting is a skill, but it comes from practicing</small>
                                Software development is also not different than other skills like shooting, writing or driving. To become a successful software developer you need lot of practice, dedication and commitment.
                            </p>
                            <ul>
                                <i>Practice is a habit, routine, does not need to remember, comes by practicing & needs dedication and commitment.</i>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="developer-mainbar" id="code_read">
                    <div className="container">
                        <h4>read source code</h4>
                        <div className="mainbar-text">
                            <p>
                                ability to read is gracious. as the title says, reading other senior developers source code is another way to learn and grow. ye ye i know reading source code as newbie is very hard expecialy a <small>javascript &heart;</small> reading <small>java or c++ code</small> is really tiring, i have been there but believe me is worth it.
                                Only few software developers will have positive answer because reading and understanding an existing software source code is the most boring task. If you are one of them who feels reading software source code is a boring task, then you are missing one of the most important best practices, which a software developer should have in his/her life.
                                if you want to write a good software code, then how it will be possible for you to write a good source code without reading tons of source codes? Even if you will write something, then how would you know which is the best?

                                Reading source code written by others gives you opportunity to criticize the mistakes done in writing that code. You will be able to identify the mistakes other software developers have done in their source code which you should not repeat.

                                There are many attributes of software codes (indentation, comments, history header, function structure, etc.), which you will learn by reading existing code, specially, a code written by well-experienced software developers. Spend some time in reading others' source code and I'm sure you would be able to write BEAUTIFUL source code in few days or few weeks and you will be able to fix the mistakes, which you were doing so far in writing the source code.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="developer-mainbar" id="document">
                    <div className="container">
                        <h4>document everything</h4>
                        <div className="mainbar-text">
                            <p>
                                just as we take note in class during lecture, for quick fall back in case we forget. same way we take <b>screen shot</b> to make sure we don't forget to order that favourite <small>pizza, fried chicken and yummy spaghetti</small>.
                                such is it in programming, as you are starting web development, probably you will write your 1st <small>javascript code</small>, documenting it, is the best way to gain your confidence by remembring how far you have come. documenting either by keeping great note, Documentation is the Key to become successful software developer, tester or architect.
                                remember as you grow you have desire to buid the next big app that will shake the world, but however, starting from small apps is and ideal for kick start.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="developer-mainbar" id="code_to_viewed">
                    <div className="container">
                        <h4>others will read your code</h4>
                        <div className="mainbar-text">
                            <p>
                                While writing your software code, keep in mind that someone is going to review your code and you will have to face criticism about one or more of the following points but not limited to:
                                  <ul className="mainbar-list">
                                    <li>Bad coding</li>
                                    <li>Not following standard</li>
                                    <li>Not keeping performance in mind</li>
                                    <li>History, Indentation, Comments are not appropriate.</li>
                                    <li>Readability is poor</li>
                                    <li>Repeated code</li>
                                </ul>
                                never let criticism gets into you, you gonna get bad comments about your code, is good, in fact it shows that you can code what others can read, instead learn from import PropTypes from 'prop-types'
                                Once you are completely done with your coding and self review, request your peer for a code review. I would strongly recommend to accept review comments happily and should be thankful to your code reviewers about the comments. Same time, it is never good to criticize any source code written by someone else. If you never did it, try it once and check the coder's expression.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="developer-mainbar" id="keepItSafe">
                    <div className="container">
                        <h4>store is safely</h4>
                        <div className="mainbar-text">
                            <p>
                                A smart developer keeps habit of taking daily backup of the produced artifacts, otherwise machine crash can crash you as well. You should keep your artifacts at your local machine as well as another secure machine, so that in case of machine crash, you can continue with the saved copy of the source code or documents.
                                If you have the habit of taking daily, weekly or even monthly backup then in worst scenario you may lose at most effort,
                               then this is where using version control system comes in. talking about <small>version control</small> we are talking about an online store, where you view, edit or host your projetcs. then <b>(git)</b> comes in, <b>(git)</b> is a version control bash for using version control system. but talking about <small>version control system</small>, then <i>(github, bitbucket etc..)</i> are where storing, edits and share comes easy, and the most puporlar, version control system is <b>(github)</b> used by millions, loved by billions, this is where the world builds software, store and manage them. <small>visit google for more</small>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="developer-mainbar" id="persistant">
                    <div className="container">
                        <h4>keep learning</h4>
                        <div className="mainbar-text">
                            <p>
                                A wise man once told me, never think you have known all. he is correct, during my days, i thought with all i have gathered am on top off the world, i was wrong. don't do this, everything is changing so do you, <small>change is a constant thing</small>,so change with it, keep learning new technologies, new frameworks, libraries, stay updated.
                            </p>
                            If you want to sustain in the market, then you would have to keep yourself updated with latest IT tools, and technologies. Following are the few sources:
                            <ul className="mainbar-list">
                                <li>Technical Forums over the internet.</li>
                                <li>Technical magazines on various IT subjects.</li>
                                <li>Latest versions of old tools and packages, languages, etc.</li>
                            </ul>
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

export default Developers;
