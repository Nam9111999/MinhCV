import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <h2 className="title">About Me</h2>
      <p className="detail">
        I would love for you to get in touch with me! Whether you're interested
        in working on a project together or just want to say hello, feel free to
        reach out using the links below. You can send me an email or message
        through social media.
        <br />
        <br />
        And, if you need it, you can even download my CV in PDF format. Looking
        forward to connecting with you!
      </p>
      <div className="box">
        <button className="btn btn--download">Download my CV</button>
      </div>
    </div>
  );
};

export default About;
