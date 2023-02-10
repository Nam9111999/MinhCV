import React from "react";
import "./hero_card.scss";
import ReactPlayer from "react-player/lazy";

const HeroCard = ({ img, video }) => {
  return (
    <div className="block">
      {img ? <img src={img} alt="" /> : null}
      {video ? (
        <ReactPlayer
          url={video}
          playing={true}
          loop={true}
          volume={0}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default HeroCard;
