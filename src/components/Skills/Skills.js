import React, { useState } from "react";
import classes from "./Skills.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Skills() {
  const [skills, setSkills] = useState([
    { skills: "HTML", level: "Experienced" },
    { skills: "CSS", level: "Experienced" },
    { skills: "SCSS/SASS", level: "Intermediate" },
    { skills: "Javascript", level: "Experienced" },
    { skills: "React", level: "Experienced" },
    { skills: "Redux toolkit", level: "Experienced" },
    { skills: "Data structures", level: "Intermediate" },
    { skills: "Algorithms", level: "Intermediate" },
    { skills: "Debugging", level: "Experienced" },
    { skills: "Typescript", level: "Intermediate" },
    { skills: "Git", level: "Experienced" },
    { skills: "GitHub/GitLab", level: "Experienced" },
    { skills: "GitHub/GitLab", level: "Experienced" },
  ]);
  return (
    <div
      style={{
        width: "80%",
        margin: "1rem auto",
      }}
    >
      <div className={classes.AboutHeading}>
        <p>Know more about my</p>
        <h2>Skills</h2>
      </div>

      <div className={classes.Skills}>
        {skills.map((skillDes) => (
          <div>
            <div style={{ paddingRight: "0.3rem" }}>
              <IoIosCheckmarkCircleOutline
                style={{ height: "30px", width: "30px", color: "#80808080" }}
              ></IoIosCheckmarkCircleOutline>
            </div>
            <div className={classes.skill}>
              <h4>{skillDes.skills}</h4>
              <p>{skillDes.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
