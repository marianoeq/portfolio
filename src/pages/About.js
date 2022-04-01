import React from "react";
import Wrapper from "../components/Wrapper";
import TronGrid from "../components/TronGrid";
import profilePicture from "../assets/img/soc-avatar.png";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineFile,
} from "react-icons/ai";

function About() {
  return (
    <Wrapper>
      <TronGrid></TronGrid>

      <div className="box">
        <div className="row">
          <div className="aboutSection">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="h-100 p-5 m-0">
                <h1 className="title">
                  Mariano Quiroga, Full-Stack Developer
                  <span className="blink">_</span>{" "}
                </h1>
                <br></br>
                <img
                  src={profilePicture}
                  className="mx-auto d-block img-fluid rounded-circle img"
                  alt="Robbie"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title">
            <h1>
              About Me<span className="blink">_</span>{" "}
            </h1>
          </div>
        </div>

        <br></br>

        <div className="objectDiv col-xs-8 col-sm-8 col-md-8 col-lg-8 mx-auto">
          &#123;
          <div className="tab">
            <span className="objKey">name</span>:{" "}
            <span className="objString">"Mariano Quiroga"</span>, <br></br>
            <span className="objKey">bio</span>:
            <span className="objString">
              {" "}
              "Full-stack developer with a background as an electrical
              technician, possessing high quality skills in communication;
              creative-problem solving; consistent and reliable. Recently
              finished the National School of Code Bootcamp, an intensive
              16-week full-stack software engineering course. I am a
              hardworking, enthusiastic individual who isn’t afraid to learn new
              technologies and is keen to continue what I have learnt at the
              bootcamp in a professional capacity."
            </span>
            ,<br></br>
            <span className="objKey">location</span>:{" "}
            <span className="objString">"London"</span>,<br></br>
            <span className="objKey">age</span>:{" "}
            <span className="objInt">31</span>,<br></br>
            <span className="objKey">occupation</span>: [
            <span className="objString">
              "student","full-stack web developer", "electrical technician"
            </span>
            ],
            <br></br>
            <span className="objKey">interests</span>: [
            <span className="objString">"football"</span>,{" "}
            <span className="objString">"snowboarding"</span>,{" "}
            <span className="objString">"gaming"</span>,{" "}
            <span className="objString">"brewing"</span>,{" "}
            <span className="objString">"cooking"</span>],
            <br></br>
            <span className="objKey">skills</span>: &#123;
            <br></br>
            <div className="tab">
              <span className="objKey">soft_skills</span>: [
              <span className="objString">"adaptability"</span>],{" "}
              <span className="objString">"team work"</span>],{" "}
              <span className="objString">"creative problem solving"</span>,{" "}
              <span className="objString">"time-management"</span>]<br></br>
              <span className="objKey">hard_skills</span>: &#123;
              <br></br>
              <span className="objKey">backend</span>: [
              <span className="objString">"Postgresql"</span>,{" "}
              <span className="objString">"NodeJS (express)"</span>,{" "}
              <span className="objString">"MongoDB"</span>,{" "}
              <span className="objString">"Postman"</span>,{" "}
              <span className="objString">"Heroku"</span>],
              <br></br>
              <span className="objKey">frontend</span>: [
              <span className="objString">"ReactJS"</span>,{" "}
              <span className="objString">"Javascript"</span>,{" "}
              <span className="objString">"CSS3"</span>,{" "}
              <span className="objString">"HTML5"</span>,{" "}
              <span className="objString">"Figma"</span>]<br></br>
              &#125;,
            </div>
            <br></br>
            <span className="objKey">contacts_clickLinks</span>: &#123;
            <div className="tab">
              <span className="objKey">#1</span>:{" "}
              <a
                href="https://www.linkedin.com/in/mariano-quiroga-react/"
                className="objLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <AiOutlineLinkedin />
              </a>
              <br></br>
              <span className="objKey">#2</span>:{" "}
              <a
                href="https://github.com/marianoeq"
                className="objLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <AiOutlineGithub />
              </a>
              <br></br>
              <span className="objKey">#3</span>:{" "}
              <a
                href="mailto:mariano.eq@gmail.com"
                className="objLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email <AiOutlineMail />
              </a>
              <br></br>
              <span className="objKey">#4</span>:{" "}
              <a
                href="https://drive.google.com/file/d/1ozzO5_48MPOYjjCr5LXnSzVu1dkxbFh5/view?usp=sharing"
                className="objLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV <AiOutlineFile />
              </a>
              <br></br>
              &#125;
            </div>
          </div>
          &#125; <span className="blink">_</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
