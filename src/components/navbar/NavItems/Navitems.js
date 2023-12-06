import React from "react";
import classes from "./NavItems.module.css";
function Navitems() {
  return (
    <div className={classes.NavItems}>
      <h4>About</h4>
      <h4>Experience</h4>
      <h4>Projects</h4>
      <h4>Contact</h4>
    </div>
  );
}

export default Navitems;
