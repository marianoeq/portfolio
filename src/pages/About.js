import ParallaxHeader from "../components/ParallaxHeader";
import React from "react";
import Wrapper from "../components/Wrapper";

function About() {
    return (

        <Wrapper>

            <ParallaxHeader></ParallaxHeader>
            

            <br></br>

            <div className="container">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title">
                        <h1>About Me</h1>
                    </div>
                </div>


                <br></br>


                <h4 className="subTitle">Bio</h4>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col sm-6 col-md-9 col-lg-12">
                            <p>Full-stack developer possessing high quality skills in communication and time management - acquired through my time in hospitality as a chef and waiter. Currently completing the University of Birmingham’s Coding Bootcamp and recently
                            finished a tech internship oriented around AGILE workflow. Possess experience in Javascript, jQuery, HTML, CSS, AJAX, MySQL, MongoDB, Heroku and Git. I am a hardworking, enthusiastic individual who is keen to learn. I have demonstrated
                            this recently especially, where I have worked two jobs whilst also committing the rest of my time to learning computer programming and completing the University’s Bootcamp. My aim is to move into the tech industry and join a company
                        where I can apply my passion for creative problem solving full time and work with a team who share this passion. </p>
                        </div>
                    </div>
                </div>



                <h4 className="subTitle">Socials</h4>
                <div className="container">
                    <a href="https://www.facebook.com/robbie.bridgwater.9/" type="button" className="btn btn-dark btn-lg btn-floating">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/robert-bridgwater-8067731b8/" type="button" className="btn btn-dark btn-lg btn-floating">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Robbie-Bridgwater" type="button" className="btn btn-dark btn-lg btn-floating">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://drive.google.com/file/d/1z7I3wXkd-YSK4M24TMR-SkRr3dHyx3iI/view" type="button" className="btn btn-dark btn-lg btn-floating">
                    <i class="fas fa-file"></i>
                    </a>
                </div>


                <br></br>
                <br></br>

            </div>
        </Wrapper>
    );
}

export default About;