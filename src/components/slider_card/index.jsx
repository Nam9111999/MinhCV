import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./slider_card.scss";

const SliderCard = ({ imgUrl, key ,project}) => {
  const navigate = useNavigate();
  let interval;
  let counter = 1;

  const radio = useRef();

  const checkURL = (url) => {
    return url.match(/(jpeg|jpg|gif|png)/) != null;
  };

  return (
    <div
      onClick={() => {
        navigate("/info/project", { state: { project: project} });
      }}
      className="slider"
      onMouseEnter={() => {
        radio.current.children[counter - 1].checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
        interval = setInterval(() => {
          radio.current.children[counter - 1].checked = true;
          counter++;
          if (counter > 4) {
            counter = 1;
          }
        }, 3000);
      }}
      onMouseLeave={() => {
        clearInterval(interval);
      }}
    >
      <div className="sliderCard">
        <div className="slides" ref={radio}>
          <input type="radio" name="radio-btn" id="radio1" />

          <input type="radio" name="radio-btn" id="radio2" />

          <input type="radio" name="radio-btn" id="radio3" />

          <input type="radio" name="radio-btn" id="radio4" />

          <input type="radio" name="radio-btn" id="radio5" />

          {imgUrl.map((li, index) => (
            <div className={index === 0 ? "slide first" : "slide"}>
              {checkURL(li) ? (
                <img src={li} alt="" />
              ) : (
                <ReactPlayer
                  url={li}
                  playing={true}
                  loop={true}
                  volume={0}
                  width="100%"
                  height="100%"
                  style={{background:"#000"}}
                />
              )}
              <img src={li} alt="" />
            </div>
          ))}

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
