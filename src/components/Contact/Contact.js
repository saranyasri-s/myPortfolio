import React from "react";
import classes from "./Contact.module.css";
import { AiTwotoneMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div id="Contact">
      <div className={classes.AboutHeading}>
        <p>Get in touch</p>
        <h2>Contact me</h2>
      </div>
      <div className={classes.contact}>
        <div>
          <AiTwotoneMail
            style={{ padding: "10px", height: "30px", width: "30px" }}
          ></AiTwotoneMail>
          <a
            href="mailto: dentist.apassionateprogrammer@gmail.com?subject = Feedback&body = Message"
            style={{
              cursor: "pointer",
              color: "grey",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            dentist.apassionateprogrammer@gmail.com
          </a>
        </div>

        <div>
          <FaLinkedin
            style={{ padding: "10px", height: "30px", width: "30px" }}
          ></FaLinkedin>
          <a
            href="https://www.linkedin.com/in/saransri/"
            target="blank"
            style={{ cursor: "pointer", color: "grey", fontSize: "1.2rem" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
