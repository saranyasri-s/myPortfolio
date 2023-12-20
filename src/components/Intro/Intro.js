import React from "react";
import classes from "./Intro.module.css";
import myImage from "../../assets/1634200550867.jpg";
function Intro() {
  return (
    <div className={classes.Intro}>
      <img className={classes.img} src={myImage}></img>
      <div className={classes.right}>
        <p>Hello I'm</p>
        <h2>Dr. Saranyasri</h2>
        <h4>Frontend Developer</h4>
        <div>
          <button className={classes.buttonDownloadCv}>Download Cv</button>
          <button className={classes.buttonContact}>Contact me</button>
        </div>
        <div>
          <button className={classes.button}>LinkedIn</button>
          <button className={classes.button}>Github</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
