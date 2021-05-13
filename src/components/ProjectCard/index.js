import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card border-dark mb-3 grid-item"> 
      <img className="card-img-top" src={props.screenshot} alt={props.name}></img>
      <div className="card-body">
        <h5 className="card-title subTitle">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.repo} className="btn btn-light btn-rounded"><strong>Repo</strong></a>
        <a href={props.deployedURL} className="btn btn-light btn-rounded"><strong>Live URL</strong></a>
      </div>
    </div>
  );
}


export default ProjectCard;