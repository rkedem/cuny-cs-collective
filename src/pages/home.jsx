import React from "react";
import "../styles/home.css";
import HeaderImg from "../imgs/coming_soon.png";


const Home = () => {
    return(
        <div className="main">
            <div className="header-main">
            <img src={HeaderImg} alt="Header" className="headerImg"/>
            </div>
            <div className="section-1">
                <div className="intro-wrapper">
                <div className="intro">
                    <h2>Resources & Clubs for CUNY Computer Science Students</h2>
                    <p>
                        The CUNY CS Collective is dedicated to providing CUNY students
                        majoring in computer science with the resources and clubs they
                        need to succeed. We offer information on the various clubs and
                        organizations available, as well as announcements for technology
                        related events happening in New York City.
                    </p>
                    <p style={{fontStyle:'italic'}}> 
                        We offer roles for those who are interested in joining our team and wish to 
                        expand the community. Please apply to the following.
                    </p>
                </div>
                </div>
                <div className="opportunites">
                    <div className="op">
                        <h2>Student Ambassador</h2>
                        <p>
                            We're looking for a group of dedicated students to be CUNY
                            CS Collective ambassadors at their CUNY campus!
                        </p>
                        <p>
                            This means that you'll be the point person for students
                            at your school, spreading the word out and connecting your peers with us!
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScToTEXzLtfoZ_rM4x-sRt55VlbiFrl0xRj8nqtvtJ_p8yMCQ/viewform" className="button">Apply</a>
                    </div>
                    <div className="op">
                        <h2>Student Leaders</h2>
                        <p>
                            If you are part of, or leading a CS related club, apply to work with you!
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScAbouuxiuFOQYjj7Syah_9JS4e2LvQ3K5HtBxjrx5MrCXbSQ/viewform" className="button">Apply</a>
                    </div>
                    <div className="op contact-us">
                        <h2>Contact Us!</h2>
                        <p>Have any questions or concerns?<br/>Is the role not listed? <br/>Would you like to help some other way?<br/>Contact Us!</p>
                        <a href="mailto:cunycscollective@gmail.com" className="button">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;