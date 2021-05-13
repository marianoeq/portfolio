import ParallaxHeader from "../components/ParallaxHeader";
import React from "react";
import Wrapper from "../components/Wrapper";
// import ProjectCard from "../components/ProjectCard";
// import Projects from "../components/ProjectCardData"
import MasonryGrid from "../components/Masonry";

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

                <MasonryGrid></MasonryGrid>

            </div>

        </Wrapper>

    )
}

export default Portfolio;