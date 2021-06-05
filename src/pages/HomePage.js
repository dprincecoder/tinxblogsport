import React from 'react';
import { Link } from 'react-router-dom';
import avater from '../images/logo.jpg'
import demoAvater from '../images/demo.JPG'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsApp from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcons from '@material-ui/icons/ArrowUpward';
import Navbar from '../components/Navbar';



function HomePage() {

    return (
        <div>
            <header className="header">
                <Navbar/>

                <div className="hero">
                    <div className="container">
                        <div className="flet">
                        <div><img className="logo" src={avater} alt="Home icon" />  </div>
                        <h1 className="name">TinX | BlogSpot</h1>
                        <p className="paragraph">Developers around the Globe are the ones that make our world full of Technology,</p>
                        <p className="paragraph">imagine a world without internet! it will be a life of boredom, turn our world into gladsome of flourescent flowers.</p>
                        <p className="paragraph">that's why developers make it happen and This Article will guild you through the path of software engineer and web development.</p>
                        <Link to="/library" className="explore-btn">Explore</Link>
                        </div>
                    </div>
                </div>
           </header>

            <section className="focus-content">
                <div className="container">
                    <div className="dev-name">web developers & software developers</div>
                    <div className="grid-item">
                        <div className="dev-left">
                        <p>
                            As technology continues to transform businesses, governments, and the lives of citizens, aspiring students are increasingly gravitating toward careers that involve computer science, programming, and application development. According to the most recent data from the National Center for Education Statistics, the number of conferred computer and information sciences degrees grew by 50.7% between 2012 and 2017. However, the wide variety of career paths available in the tech field can make it difficult to narrow down employment options post-graduation. Considering most computer programming roles have at least some overlap, it’s important to understand the similarities and differences between tech occupations to make an informed decision about your future.
                        </p>
                        <p>
                            For many students, the web developer vs. software developer comparison is particularly challenging to sort out. While those interested in these career fields often pursue similar degrees, such as a Bachelor of Science in Information Systems, the knowledge and expertise they cultivate during their studies tend to vary. Both roles involve writing code, designing client-side applications, and using different programming languages, but the projects they work on are usually quite different. To help you understand the nuances of web development vs. software development, let’s take a closer look at the responsibilities, job outlook, and core skills needed in each of these popular tech occupations.
                        </p>
                    </div>
                    <div className="dev-right">
                        <p>
                            The primary difference between web developers vs. software developers has to do with the programs they work with and what they’re trying to create. Web developers are mainly concerned with websites and web applications that run on internet browsers, while software developers are more focused on computer programs for desktop and mobile devices.
                            <br/>

                            Both career fields require extensive programming experience, a strong attention to detail, and a knack for problem solving, but they have different workflows, maintenance requirements, and levels of complexity. For example, web developers often work in close collaboration with business and marketing experts to ensure their company’s website is efficient, user friendly, and aesthetically pleasing. Software developers, on the other hand, tend to work with other tech-oriented co-workers on large-scale software, operating system, and mobile application projects that might not require input from other business units. Ultimately, the career path students choose should align with their professional goals and personal interests, which is why it’s crucial to explore each role in detail before committing the time and resources.
                        </p>
                    </div>
                    </div>
                    <div className="dev-name"> Web Developer</div>
                    <div className="web-dev">
                        <p>
                            Web developers are responsible for how a website or web application looks and functions, from its user interface and page layout to back-end systems for gathering data. They work with organization leaders to design unique and engaging websites for businesses, nonprofits, government agencies, and anyone else looking to communicate more effectively online. Web developers are also in charge of maintaining the performance of the websites and applications they create, ensuring users have a consistent and positive browsing experience. According to the U.S. Bureau of Labor Statistics, common web developer job responsibilities include:
                        </p>
                    </div>
                    <ul className="web-dev-list">
                        <li>
                            Coordinating with clients/business leaders to outline new web design projects
                        </li>
                        <li>
                            Creating and testing web applications and website features
                        </li>
                        <li>
                            Writing code in various programming languages, including HTML/CSS, XML, and JavaScript
                        </li>
                        <li>
                            Integrating content into websites, such as graphics, written copy, videos, and audio
                        </li>
                        <li>
                            Monitoring website traffic and performance
                        </li>
                    </ul>
                    <div className="web-dev">
                         <p>
                         web development field can be broken down into three specialized areas based on a candidate’s particular skill sets and professional interests: back-end developers, front-end developers, and full-stack developers. Each of these web design roles comes with different expectations and responsibilities:
                    </p>
                    </div>
                    <div className="web-dev-catry">
                        <div className="web-dev-catry-box">
                            <div className="catry-name">front-end developers</div>
                            <p>
                                Sometimes called client-side developers, these design experts are in charge of how websites and applications look and function from the users’ perspective. They are responsible for making all online content easy to access, browse, and interact with, especially for users who may have limited computer skills. Front-end web developers must also ensure their websites are compatible with a wide range of operating systems, browsers, and devices to prevent display and functionality errors
                            </p>
                        </div>
                        <div className="web-dev-catry-box">
                            <div className="catry-name">back-end developers</div>
                            <p>
                                These professionals focus on the technical aspects of websites and web applications that support both basic and advanced functionality. They largely work on administrative components including databases, website architecture, and login form, getting user data from database, secure user info such as <b>credit card, password</b> from attackers, creating new APIs and user interfaces based on predefined specifications. Generally speaking, this type of developer is concerned with how websites and web-based applications work on a fundamental level.
                            </p>
                        </div>
                        <div className="web-dev-catry-box">
                            <div className="catry-name">full-start developers</div>
                            <p>
                                As the job title suggests, these web design professionals are proficient in both front- and back-end development tasks. Most full-stack web developers have extensive experience in application design, user experience, and programming languages like HTML, XML, JavaScript, MySQL, and others. As such, they are able to fill advisory roles and technical positions that require both computer science and business savvy. <b>despite this web field, knowing what you want and the area you want to work is a major set out for you.</b>
                            </p>
                        </div>
                    </div>
                    <div className="dev-name">Software Developer</div>
                    <div className="web-dev">
                        <p>
                           Software developers invent, manage, and optimize computer programs that run on desktops, laptops, smartphones, and other mobile devices. Using different programming languages ― such as Java, Python, C#, and SQL ― these computer science professionals write complex code that governs how desktop applications function. Many software developers work for large technology companies, like Microsoft and Oracle, designing new products or fine-tuning existing applications. This includes troubleshooting code bugs, updating user interfaces, creating new in-app tools, and much more. According to the BLS, software developers have some combination of the following responsibilities:
                        </p>
                    </div>
                    <ul className="web-dev-list">
                        <li>
                            Analyzing users’ needs and designing software-based solutions
                        </li>
                        <li>
                           Recommending software upgrades to existing computer programs and systems
                        </li>
                        <li>
                           Designing new applications for specific audiences (consumers, enterprises, etc.)
                        </li>
                        <li>
                            Creating detailed models and diagrams that outline which software code is needed
                        </li>
                        <li>
                           Documenting all aspects of application and system design for future reference
                        </li>
                        <li>
                           Testing code for new applications to ensure consistency and efficiency
                        </li>
                        <li>
                           Ensuring software is compatible with present data management systems
                        </li>
                    </ul>
                    <div className="web-dev">
                         <p>
                         Software developers are heavily involved in every stage of the application design process, from the initial planning to the final rollout of new computer programs. However, just like web developers, professionals in this field are often categorized into specific roles based on their specializations: software applications developers and software systems developers.
                    </p>
                    </div>
                    <div className="web-dev-catry">
                        <div className="web-dev-catry-box">
                            <div className="catry-name">Software application developers</div>
                            <p>
                                These professionals tend to focus on designing specific desktop and mobile applications, tools, and games for consumer audiences, according to the National Center for O*NET Development (NCOD). They often work on the same project for many years and are responsible for ensuring their software is functional, engaging, and efficient.
                            </p>
                        </div>
                        <div className="web-dev-catry-box">
                            <div className="catry-name">Software system developers</div>
                            <p>
                                Developers in this role are largely concerned with designing systems-level software for enterprise customers, rather than the public, according to the NCOD. They use their extensive programming knowledge to create computing applications for a range of industries, from manufacturing to aerospace and beyond. The software they develop is used to manage corporate networking apps, database management systems, and other critical infrastructure.

                            </p>
                        </div>
                        <div className="web-dev-catry-box">
                            <div className="catry-name">choos you path</div>
                            <p>
                                Every software development position has its own unique responsibilities ― some companies rely on developers to actually write code, while others assign this routine work to dedicated programmers. Ultimately, the job openings students apply for should mirror their personal interests and the hard skills they’ve developed during their undergraduate studies. If you’re looking for a more hands-on role, try to prioritize openings that list coding as a core requirement.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="demo">
                <div className="dev-name">Html boiler plate</div>
                <div className="container">
                    <div className="demo-text">
                        <p>
                                in this small HTML SNIPET demo below, the left is the code to execute front-end html markup static website. while on the right hand is the output display with <b>live server</b> in chrome. note the code editor used here is <b>VS CODE ( VISUAL STUDIO CODE )</b>. you can see there is h1, h2, h3, and so on till h6 and also p tag known as paragraph. to access lot of knowledge about web development click on <b>library button</b> also click on <b>tools button above to access different code editor and there prons and cons.</b>
                    <Link to="/library" className="library-btn">library</Link>
                        </p>
                    </div>
                    <div className="demo-image">
                        <img src={demoAvater} alt="demo image" className="demo-img"/>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <a href="#" className="gotoupbtn">
                        <ArrowUpwardIcons className="up"/>
                    </a>
                <div className="footer">
                    <div className="about">
                        <h4>about </h4>
                        <p>all of us at <b>tinX | blogSpot</b> believe that technology is fast revolving, so there is high demand in developers. we care about providing the best guild about programming and away for newbie to get in it with 2 months of going through our blog. this site is open for ads contant us below to host your advertisement.</p>
                    </div>
                    <div className="about">
                        <h4>location</h4>
                        <p>
                            24th churchil road off lagos bus stop, portharcout, rivers state, nigeria 5000272
                        </p>
                    </div>
                    <div className="about">
                        <h4>contact</h4>
                        <ul className="social-media">
                            <li className="social-icon">
                            <a href="https://web.facebook.com/prince.azubuike.5621" target="_blank" className="social-link"><FacebookIcon/></a>
                            </li>
                            <li className="social-icon">

                            <a href="https://twitter.com/DPrinceboi?=01" target="_blank" className="social-link"><TwitterIcon/></a>
                            </li>
                            <li className="social-icon">

                            <a href="https://wa.link/99z03t" target="_blank" className="social-link"><WhatsApp/></a>
                            </li>
                            <li className="social-icon">

                            <a href="https://www.instagram.com/dprince_boi/" target="_blank" className="social-link"><InstagramIcon/></a>
                            </li>
                        </ul>
                    </div>
               </div>
                    <div className="copy">
                        <h5>&copy; 2021 dprince coporation</h5>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage;
