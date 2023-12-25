import React from "react";
import classes from "./NavItems.module.css";
function Navitems() {
  return (
    <div className={classes.NavItems}>
      <a href="#About">About</a>
      <a href="#Skills">Skills</a>
      <a href="#Experience">Experience</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </div>
  );
}

export default Navitems;
