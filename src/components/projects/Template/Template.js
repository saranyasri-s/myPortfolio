import React from "react";
import classes from "./Template.module.css";
import projectImage from "../../../assets/workout.jpg.webp";
function Template() {
  return (
    
    <div className={classes.project}>
      <img src={projectImage} alt="Project Image"></img>
      <div className={classes.links}>
        <a href="https://github.com/saranyasri-s/React-Gym" target="_blank">
          Github
        </a>
        <a href="https://react-gym-dun.vercel.app/" target="_blank">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Template;
