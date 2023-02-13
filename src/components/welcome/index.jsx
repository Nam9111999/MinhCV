import React from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.scss";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      {/* <h1 className="title">Nguyen Nhat Minh</h1> */}
      <h1 className="title">Xin chào !</h1>
      <p className="text">
        Welcome to my portfolio site, showcasing my best work in graphic design
        and 2D/3D motion graphics. I am proud of all of my creations, whether
        they were made for commercial purposes or just for fun. I am a driven
        Motion and 3D Designer, fueled by a love for technology and an
        adventurous spirit. I constantly strive for new experiences and deeper
        knowledge in my field with the aim of making a positive impact on the
        world.
      </p>
      <p className="text">I hope you enjoy your time here. Thank you!</p>
      <button
        className="btn"
        onClick={() => {
          navigate("info/main");
        }}
      >
        Let's see the work
      </button>
    </div>
  );
};

export default Welcome;
