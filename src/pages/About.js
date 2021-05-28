import React from "react";
import Wrapper from "../components/Wrapper";
import TronGrid from "../components/TronGrid";
import profilePicture from "../assets/img/profilePicture.jpg"

import {
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineMail,
    AiOutlineFacebook,
    AiOutlineFile,
} from 'react-icons/ai';

function About() {
    return (

        <Wrapper>


            <TronGrid></TronGrid>


            <div className="box">

                <div className='row'>
                    <div className='aboutSection'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='h-100 p-5 m-0'>
                                <h1 className='title'>Robert Bridgwater, Full-Stack Developer<span className='blink'>_</span> </h1>
                                <br></br>
                                <img src={profilePicture} className='mx-auto d-block img-fluid rounded-circle img' alt='Robbie'></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title">
                        <h1>About Me<span className='blink'>_</span> </h1>
                    </div>
                </div>

                <br></br>

                <div className='objectDiv col-xs-8 col-sm-8 col-md-8 col-lg-8 mx-auto'>
                    &#123;
                        <div className='tab'>
                        <span className='objKey'>name</span>: <span className='objString'>"Robert Bridgwater"</span>, <br></br>
                        <span className='objKey'>bio</span>:<span className='objString'> "Full-stack developer possessing high quality skills in communication; creative-problem solving; and time management. Recently finished the University of Birmingham’s Coding Bootcamp and a tech internship oriented around AGILE workflow. I am a hardworking, enthusiastic individual who isn’t afraid to learn new technologies and is keen to continue what I have learnt at the bootcamp in a professional capacity."</span>,
                        <br></br>
                        <span className='objKey'>pronouns</span>: <span className='objString'>"he/him"</span>, 
                        <br></br>
                        <span className='objKey'>location</span>: <span className='objString'>"Solihull"</span>, 
                        <br></br>
                        <span className='objKey'>age</span>: <span className='objInt'>25</span>, 
                        <br></br>
                        <span className='objKey'>occupation</span>: [<span className='objString'>"student", "waiter", "photographer"</span>], 
                        <br></br>
                        <span className='objKey'>interests</span>: [<span className='objString'>"reading"</span>, <span className='objString'>"running"</span>, <span className='objString'>"gaming"</span>, <span className='objString'>"cooking"</span>], 
                        <br></br>
                        <span className='objKey'>skills</span>: &#123; 
                        <br></br>
                        <div className='tab'>
                            <span className='objKey'>soft_skills</span>: [<span className='objString'>"communication"</span>, <span className='objString'>"creative problem solving"</span>, <span className='objString'>"time-management"</span>] 
                            <br></br>
                            <span className='objKey'>hard_skills</span>: &#123;
                            <br></br>
                            <span className='objKey'>backend</span>: [<span className='objString'>"MongoDB (Mongo Atlas)"</span>, <span className='objString'>"NodeJS (express)"</span>, <span className='objString'>"MySQL"</span>, <span className='objString'>"Restful and 3rd party API's"</span>, <span className='objString'>"Heroku"</span>],
                            <br></br>
                            <span className='objKey'>frontend</span>: [<span className='objString'>"ReactJS"</span>, <span className='objString'>"Javascript"</span>, <span className='objString'>"Handlebars"</span>, <span className='objString'>"CSS3"</span>, <span className='objString'>"HTML5"</span>]
                            <br></br>
                            &#125;,
                        </div>
                        <br></br>
                        <span className='objKey'>contacts_clickLinks</span>: &#123;
                        <div className='tab'>
                            <span className='objKey'>#1</span>: <a href='https://www.linkedin.com/in/robert-bridgwater-8067731b8/' className='objLink' target='_blank' rel='noopener noreferrer'>LinkedIn <AiOutlineLinkedin /></a>
                            <br></br>
                            <span className='objKey'>#2</span>: <a href='https://github.com/Robbie-Bridgwater' className='objLink' target='_blank' rel='noopener noreferrer'>GitHub <AiOutlineGithub /></a>
                            <br></br>
                            <span className='objKey'>#3</span>: <a href='https://www.facebook.com/robbie.bridgwater.9/' className='objLink' target='_blank' rel='noopener noreferrer'>FaceBook <AiOutlineFacebook /></a>
                            <br></br>
                            <span className='objKey'>#4</span>: <a href='mailto:Robbie_Bridgwater@Hotmail.co.uk' className='objLink' target='_blank' rel='noopener noreferrer'>Email <AiOutlineMail /></a>
                            <br></br>
                            <span className='objKey'>#5</span>: <a href='https://drive.google.com/file/d/1z7I3wXkd-YSK4M24TMR-SkRr3dHyx3iI/view' className='objLink' target='_blank' rel='noopener noreferrer'>CV <AiOutlineFile /></a>
                            <br></br>
                            &#125;
                        </div>
                    </div>
                    &#125; <span className='blink'>_</span>
                </div>

            </div>

        </Wrapper>
    );
}

export default About;