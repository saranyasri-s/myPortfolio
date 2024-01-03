import React from "react";
import Template from "./Template/Template";
import classes from "./Projects.module.css";
function Projects() {
  return (
    <div>
      <div className={classes.AboutHeading}>
        <p>Explore my</p>
        <h2>Projects</h2>
      </div>
      <div>
        <Template></Template>
      </div>
    </div>
  );
}

export default Projects;
