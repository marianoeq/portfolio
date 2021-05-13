import ParallaxHeader from "../components/ParallaxHeader";
import React from "react";
import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/ProjectCard";
import Projects from "../components/ProjectCardData"

function Portfolio() {
    return (

        <Wrapper>

            <ParallaxHeader></ParallaxHeader>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center title">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <br></br>
                <div className="grid">
                    {Projects.map((projectData) => {
                        return <ProjectCard
                            key={projectData.id}
                            name={projectData.name}
                            description={projectData.description}
                            screenshot={projectData.screenshot}
                            repo={projectData.repo}
                            deployedURL={projectData.deployedURL}
                        />
                    })}
                </div>
            </div>

        </Wrapper>

    )
}

export default Portfolio;