import React from "react";
import classes from "./About.module.css";
import image from "../../assets/girlcoding1.jpg";
import { FcPortraitMode } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
function About() {
  return (
    <div>
      <div className={classes.AboutHeading}>
        <p>Get to know more</p>
        <h2>About me</h2>
      </div>
      <div className={classes.experienceEducation}>
        <div>
          <img className={classes.img} src={image}></img>
        </div>
        <div className={classes.About}>
          <div className={classes.top}>
            <div>
              <FcPortraitMode
                style={{ height: "30px", width: "30px" }}
              ></FcPortraitMode>
              <p>Experience</p>
              <p>Experience</p>
              <p>Experience</p>
            </div>
            <div>
              <FcRules style={{ height: "25px", width: "25px" }}></FcRules>
              <p style={{ fontWeight: "600", margin: 0, padding: "0.2rem" }}>
                Experience
              </p>
              <p style={{ fontWeight: "600", margin: 0, padding: "0.2rem" }}>
                Experience
              </p>
              <p style={{ fontWeight: "600", margin: 0, padding: "0.2rem" }}>
                Experience
              </p>
            </div>
          </div>
          <div className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
