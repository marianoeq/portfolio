import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card border-dark mb-3 grid-item"> 
      <img className="card-img-top" src={props.screenshot} alt={props.name}></img>
      <div className="card-body">
        <h5 className="card-title">&#123; <span className='objKey'>{props.name}</span>:</h5>
        <p className="card-text"><span className="objString">"{props.description}"</span> &#125;</p>
        <a href={props.repo} target="_blank" className="btn btn-dark btn-rounded"><strong>Repo</strong></a>
        <a href={props.deployedURL} target="_blank" className="btn btn-dark btn-rounded"><strong>Live URL</strong></a>
      </div>
    </div>
  );
}


export default ProjectCard;