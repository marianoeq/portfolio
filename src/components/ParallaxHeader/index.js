import { Parallax } from 'react-parallax';
import backgroundImage from "../../assets/img/linkedInBack.webp"
import profilePictureSRC from "../../assets/img/pictureMe.jpg"
import React from "react";
import "./style.css";


const ProfilePicture = () => {
    return ( 
        <img className="profile-picture" src={profilePictureSRC} alt=""></img>
    )
}

const ParallaxImage = () => {

    return (
            <Parallax
                bgImage={backgroundImage}
                bgImageAlt="Parallax Image - Pretty Colors"
                strength={-125}
            >
                <div style={{ height: '350px'}} />
            </Parallax>
    );
}

const ParallaxHeader = () => {
    return (

        <header>
            <div className="mosaic">
                <div className="mosaic__item">
                    <ParallaxImage></ParallaxImage>
                </div>
                <div className="mosaic__item">
                    <ProfilePicture></ProfilePicture>
                </div>
            </div>
        </header>

    );
}

export default ParallaxHeader;