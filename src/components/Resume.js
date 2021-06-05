import React from 'react'
import Navbar from './Navbar';
import ArrowUpwardIcons from '@material-ui/icons/ArrowUpward';
import resume from '../images/resume.jpg';
import resumeAddress from '../images/resume-add1.jpg';
import resumeExp from '../images/resume-exp.jpg';
import resumeEdu from '../images/resume-edu.jpg';
import resumeSkil from '../images/resume-skil.jpg';
import resumeOther from '../images/resume-other.jpg';

function Resume() {
    return (
        <div>
            <Navbar />
            <div className="resume">
                <div className="container">
                    <h1 className="resume-name">good resume presentation</h1>
                    <div className="resume-grid">
                        <div className="resume-image">
                            <img src={resume} alt="resume img" className="resume-img"/>
                        </div>
                        <div className="resume-text">
                            <p>
                                resume or simply as curriculum vitae (CV) is who we are, what we know, what we present during job hunt and interview. without a good resume, standing out during competative job, is disastrous.
                                this article will give you hint on how to present a good resume to your employer.
                                You have to prepare your resume in such a way that it gives impression in first look that you are a perfect fit for the job you have applied. An employer hardly takes 10-15 seconds to make a decision about your interview call after looking at your resume. If your resume is well written then definitely you will be in the shortlisted candidates does not matter you have required potential or not but you will get a call otherwise your resume will become a part of
                            </p>
                        </div>
                    </div>
                    <h4>things that must be in your resume</h4>
                    <ul className="resume-list">
                        <li className="resume-item">Qualifications</li>
                        <li className="resume-item">Experience</li>
                        <li className="resume-item">Achievements</li>
                        <li className="resume-item">Capabilities</li>
                        <li className="resume-item">Qualities</li>
                    </ul>
                    <h4>Address section</h4>
                    <div className="resume-bar">
                        <p>address is what highlight which part of the country, you are applying from it stays right above of the page and contains: name, e-mail, phone and address no. <b>check the image for example.</b></p>
                        <img src={resumeAddress} alt="resume address example" className="resume-sample-img"/>
                    </div>

                    <h4>Experience section</h4>
                    <div className="resume-bar">
                        <p>Experience is another key factor to show your employer, to show case what you know and what you can do. Experience is what you have gained from colledge, work, or skill.</p>
                        <img src={resumeExp} alt="resume experience example" className="resume-sample-img"/>
                    </div>

                    <h4>Education section</h4>
                    <div className="resume-bar">
                        <p>education is where we all start from, we all started as tender, to go school, to be able to read and write, now is time for education to pay off, but your certificate comes in, show your employer that you have undergone standard school, include your degree's here.</p>
                        <img src={resumeEdu} alt="resume experience example" className="resume-sample-img"/>
                    </div>

                    <h4>skill section</h4>
                    <div className="resume-bar">
                        <p>skill is the practice you have undergo as you work, it also means, you have actual get your hands dirty for job not just theory, is important to show it.</p>
                        <img src={resumeSkil} alt="resume experience example" className="resume-sample-img"/>
                    </div>
                    <h4>other vital things</h4>
                    <div className="resume-bar">
                        <p>what ever you have got in mind, like hobby, profession, qualifications, include it here. show it off, is who you are <b>key points passions, activities.</b></p>
                        <img src={resumeOther} alt="resume experience example" className="resume-sample-img"/>
                    </div>
                </div>
                 <div className="go-up">
                        <a href="#" className="gotoupbtn">
                                 <ArrowUpwardIcons className="up"/>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Resume;
