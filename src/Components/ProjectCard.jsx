import React from "react";
import { Link } from "react-router";

export default function ProjectCard({
  title,
  description,
  projectStack,
  imageURL,
  imageALT,
  liveLink,
}) {
  return (
    <div className="project-card ">
      <img src={imageURL} className="scale" alt={imageURL} />
      <div className="project-info scale">
        <h1>{title}</h1>
        <span>{description}</span>
        <div className="project-stack">
          {projectStack.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
      </div>
      <Link to={liveLink} className="project-link scale">
        <i className="fa-duotone fa-2x fa-solid fa-link"></i>
      </Link>
    </div>
  );
}
