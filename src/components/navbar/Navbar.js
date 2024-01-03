import React from "react";
import classes from "./Navbar.module.css";
import Navitems from "./NavItems/Navitems";
function Navbar() {
  return (
    <div className={classes.Navbar}>
      <h2>Dr. Saranyasri</h2>
      <div className={classes.Navitems}>
        <Navitems></Navitems>
      </div>
    </div>
  );
}

export default Navbar;
