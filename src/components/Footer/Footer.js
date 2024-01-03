import React from "react";
import classes from "./Footer.module.css";
import Navitems from "../navbar/NavItems/Navitems";
function Footer() {
  return (
    <div className={classes.Footer}>
     <div className={classes.Navitems}>
        <Navitems></Navitems>
      </div>
      <p>Copyright © 2023 Saranyasri Selvaraj. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
