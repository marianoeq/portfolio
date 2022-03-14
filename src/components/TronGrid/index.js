import React from "react";
import backgroundVideo from "../../assets/img/backgroundVideo.mp4";
import "./style.css";

function TronGrid() {
  return (
        <video autoPlay loop className="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video> 
      )
    }
    export default TronGrid;
    
    

