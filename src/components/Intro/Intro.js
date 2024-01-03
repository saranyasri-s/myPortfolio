import React from "react";
import classes from "./Intro.module.css";
import myImage from "../../assets/1634200550867.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Intro() {
  return (
    <div id="Intro" className={classes.Intro}>
      <img className={classes.img} src={myImage}></img>
      <div className={classes.right}>
        <p style={{ fontWeight: "500" }}> Hello I'm</p>
        <h2>Dr. Saranyasri</h2>
        <h4>Frontend Developer</h4>
        <div>
          <a
            href="../../assets/drssaranyasriresume.jpg"
            download
            className={classes.buttonDownloadCv}
          >
            Download Cv
          </a>
          <a
            href="#Contact"
            style={{ textDecoration: "none" }}
            className={classes.buttonContact}
          >
            Contact me
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/saransri/" target="_blank">
            <FaLinkedin
              style={{
                height: "40px",
                width: "40px",
                margin: "20px",
                cursor: "pointer",
              }}
            ></FaLinkedin>
          </a>
          <a href="https://github.com/saranyasri-s" target="_blank">
            <FaGithub
              style={{
                height: "40px",
                width: "40px",
                margin: "20px",
                cursor: "pointer",
              }}
            ></FaGithub>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
