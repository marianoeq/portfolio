import React from "react";
import Masonry from "react-masonry-css";
import "./style.css";
import ProjectCard from "../ProjectCard"
import Projects from "../ProjectCardData"

const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
    500: 1
};

const MasonryGrid = () => {
    return (
        <div className="App">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >

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

            </Masonry>
        </div>
    )
};


export default MasonryGrid;