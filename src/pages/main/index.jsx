import React from "react";
import "./main.scss";
import {
  BsArrowBarUp,
} from "react-icons/bs";
import HeroCard from "../../components/hero_card";

const Main = () => {
  return (
    <div className="main" id="top">
      <div className="hero">
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/14820984/pexels-photo-14820984.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/10026524/pexels-photo-10026524.png?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/1694874/pexels-photo-1694874.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/123016/pexels-photo-123016.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/105808/pexels-photo-105808.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://images.pexels.com/photos/2850833/pexels-photo-2850833.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
      </div>
      <div className="section flex-column">
        <a className="btn btn--back-top" href="#top">
          <BsArrowBarUp className="arrow" />
          Back to Top
        </a>
       
      </div>
    </div>
  );
};

export default Main;
