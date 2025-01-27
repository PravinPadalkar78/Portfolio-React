import React from "react";
import "./Projects.css";
import ProjectsData from "../../ProjectsData";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <main>
      <div className="project-container">
        {ProjectsData.map(
          ({
            title,
            description,
            projectStack,
            imageURL,
            imageALT,
            liveLink,
          }) => {
            return (
              <ProjectCard key={imageURL}
                title={title}
                description={description}
                projectStack={projectStack}
                imageURL={imageURL}
                imageALT={imageALT}
                liveLink={liveLink}
              />
            );
          }
        )}
      </div>
    </main>
  );
}
