import React from "react";
import classes from "./Experience.module.css";
function Experience() {
  return (
    <div
      id="Experience"
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.AboutHeading}>
        <p>Explore my</p>
        <h2>Experience</h2>
      </div>
      <div className={classes.top}>
        <div>
          <p
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              margin: 0,
              padding: "0.7rem",
            }}
          >
            Marketplug Ltd, India
          </p>
          <p
            style={{
              fontWeight: "600",
              margin: 0,
              padding: "0.5rem",
              color: "#e75858",
            }}
          >
            1 year 3 months (feb, 2022 - April, 2023)
          </p>
          <p
            style={{
              color: "grey",
              textAlign: "left",
              margin: 0,
              padding: "0.2rem",
            }}
          >
            I worked on a project called RENTALS- a hotel booking web app
            <br />
            <hr />
            <span style={{ fontWeight: "700", color: "black" }}>
              My contributions:
            </span>
            <br />
            - I worked in agile methodology Built the app from scratch
            simulating the FIGMA design, as one of the two Frontend Developers.
            <br />
            - Tech stacks used
            <br />
            1. React <br /> 2. Typescript <br /> 3. CSS <br /> 4. Redux <br />-
            Have exposure to Docker, Aws hosting and Microfrontend architecture.
          </p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "600",
              fontSize: "1.4rem",
              margin: 0,
              padding: "0.7rem",
            }}
          >
            Amtica Ltd, London
          </p>
          <p
            style={{
              fontWeight: "600",
              margin: 0,
              padding: "0.5rem",
              color: "#e75858",
            }}
          >
            4 Months (oct, 2021-jan, 2022)
          </p>
          <p
            style={{
              color: "grey",
              textAlign: "left",
              margin: 0,
              padding: "0.2rem",

              fontFamily: "sans-serif",
              color: "grey",
              fontSize: "1.1rem",
            }}
          >
            Worked in a website that connects the user and the photo storage,
            that enables the user to store, share, view, and edit photos and
            video, based on the user subscribed plan. <br />
            <hr />
            <span style={{ fontWeight: "700", color: "black" }}>
              My contributions:
            </span>
            <br />- Made entire functionality mobile friendly <br /> - Form
            validation with basic CSS - Sliding and beautification of pricing
            plans <br /> - Debugged the code and fixed issues like alignment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
