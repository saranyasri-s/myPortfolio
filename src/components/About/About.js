import React from "react";
import classes from "./About.module.css";
import image from "../../assets/girlcoding1.jpg";
import { GrCatalog } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
function About() {
  return (
    <div id="About">
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
              <GrResources
                style={{ height: "25px", width: "25px" }}
              ></GrResources>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  margin: 0,
                  padding: "0.7rem",
                }}
              >
                Experience
              </p>
              <p style={{ color: "grey", margin: 0, padding: "0.5rem" }}>
                1 year, 7 months
              </p>
              <p style={{ color: "grey", margin: 0, padding: "0.2rem" }}>
                Frontend Development
              </p>
            </div>
            <div>
              <GrCatalog style={{ height: "25px", width: "25px" }}></GrCatalog>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  margin: 0,
                  padding: "0.7rem",
                }}
              >
                Education
              </p>
              <p style={{ color: "grey", margin: 0, padding: "0.5rem" }}>
                Bachelor of Dental Surgery (BDS)
              </p>
              <p style={{ color: "grey", margin: 0, padding: "0.2rem" }}>
                Master of Dental Surgery (MDS)
              </p>
            </div>
          </div>
          <div className={classes.description}>
            I am a Dentist and a self taught front end developer with skilled
            knowledge in Html, CSS, JavaScript, typescript, React js, Redux
            ,Data structures and Algorithms ,and version control like Git ,
            GitHub. Throughout my learning, I have built 20+ small projects and
            emphasized on debugging for conceptual understandings, I have 1.5
            years of remote job experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
