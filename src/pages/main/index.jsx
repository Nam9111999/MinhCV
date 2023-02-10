import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./main.scss";
import HeroCard from "../../components/hero_card";
import { gsap } from "gsap"; 
import {FaArrowAltCircleRight} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Main = () => {
  const hero = useRef(null);

  useLayoutEffect(() => {
    const el = hero.current;
    const tl = gsap.timeline();
    tl.to(el, {
      scale: 1,
      marginTop: 150,
      translateX: 0,
      scrollTrigger: {
        trigger: ".nav",
        start: "top top+=2",
        end: "bottom center-=350",
        scrub: 2,
      },
    });

    gsap.to(".info", {
      y: -80,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".info",
        start: "top center+=200",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });

    gsap.to(".project--img", {
      y: 50,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      delay: 1,
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".project--img",
        start: "top-=100 center+=200",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--width", windowSize.current[0] + "px");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="main" id="top">
      <div className="hero" ref={hero}>
        <div className="block .block__center">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019212/C1_EN_FB-IG_s9x16_15s_017514_R0_HERO_wi4d9b.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019199/C2_ES_FB-IG_r9x16_15s_014366_R0_HERO_b7sicp.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019206/3_upl49d.jpg"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019198/CV_2021-23_cnazwb.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019198/CV_2021-08_jsklnv.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019196/CV_2021-25_xly3zj.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019195/CV_2021-26_gvv2jr.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019186/C2_EN_FB-IG_s9x16_15s_017514_R0_HERO_dpu6zs.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019192/1_wsdso6.jpg"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019188/CV_2021-06_mintsc.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019181/5_nlfr5z.jpg"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Volkwagen_3x_q6syei.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019160/C4_EN_TT_9x16_15s_018794_R0_HERO_equ9da.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019146/C1_ES_FB-IG_r9x16_15s_014366_R2_HERO_vyodp3.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019154/Explorer_3x_y0sdil.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019147/C1_EN_FB-IG_s9x16_15s_015861_R2_HERO_cotatm.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            img={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019157/Bolt_3x_cd4rxl.png"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
        <div className="block">
          <HeroCard
            video={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019173/C5_EN_TT_9x16_15s_018794_R0_HERO_tsilno.mp4"
            }
            name="Beer coconut advertise"
            year="2023"
          />
        </div>
      </div>
      <div className="project">
        <div className="info left">
          <h2 className="title">Ovel project</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
            magnam nobis ducimus, repellendus aspernatur delectus natus
            perspiciatis, nostrum enim autem molestias soluta, id accusantium
            ullam officia. Mollitia, pariatur labore? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Adipisci corporis autem non
            dolorem eos dolores illum distinctio aperiam temporibus dicta facere
            et sapiente natus ipsam reprehenderit, ratione laborum iste tempora.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            beatae quas? Pariatur, quis tempora! Dolorem nobis, dignissimos cum
            nam autem earum distinctio at velit est, vel sequi? Sequi, inventore
            unde!
          </p>
          <button onClick={()=> navigate("/project")} className="btn">Get more info <FaArrowAltCircleRight className="icon"/></button>
        </div>
        <div className="project--img right">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019157/Bolt_3x_cd4rxl.png"
            }
            alt=""
          />
        </div>
      </div>
      <div className="project">
        <div className="project--img left">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019156/Lecol_3x_egqxyt.png"
            }
            alt=""
          />
        </div>
        <div className="info right">
          <h2 className="title">Ovel project</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
            magnam nobis ducimus, repellendus aspernatur delectus natus
            perspiciatis, nostrum enim autem molestias soluta, id accusantium
            ullam officia. Mollitia, pariatur labore? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Adipisci corporis autem non
            dolorem eos dolores illum distinctio aperiam temporibus dicta facere
            et sapiente natus ipsam reprehenderit, ratione laborum iste tempora.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            beatae quas? Pariatur, quis tempora! Dolorem nobis, dignissimos cum
            nam autem earum distinctio at velit est, vel sequi? Sequi, inventore
            unde!
          </p>
          <button  onClick={()=> navigate("/project")}  className="btn">Get more info <FaArrowAltCircleRight className="icon"/></button>
        </div>
      </div>
    </div>
  );
};

export default Main;
