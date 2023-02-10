import React from "react";
import {  useNavigate } from "react-router-dom";
import "./welcome.scss";

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className="welcome" >
      <h1 className="title">Nguyen Nhat Minh</h1>
      <p className="text">
        Welcome to my portfolio site: a collection of my favorite work, graphic
        design and art direction, my favorite photos that I've taken for
        professional work or just travel, and some of the 3D pieces that I'm
        most proud of, both for commercial work or just for fun.
      </p>
      <p className="text">
        I graduated in Graphic Design in Spain, followed by a move to San
        Francisco to pursue an MFA in 3D Modeling & VFX. During my Grad School
        years in the U.S. I continued working in advertising as an art director
        and 3D artist. I also developed a passion for photography that led me to
        travel throughout Asia and eventually settling in Vietnam.
      </p>
      <p className="text">
        After a few more years in the word of advertising my career took an
        exciting turn to embark in a new entrepreneurial project: opening Tê Tê
        Brewing, a craft brewery established in Saigon, where I took all product
        design and marketing responsibilities amongst other things.
      </p>
      <p className="text">
        I hope you enjoy my work. If you want to ask me about it, hire me for a
        project or just say hello, don't hesitate in reaching out to me via
        email or social media.
      </p>
      <button className="btn" onClick={()=>{navigate("info/main")}}>Let's see the work</button>
    </div>
  );
};

export default Welcome;
