import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./main.scss";
import HeroCard from "../../components/hero_card";
import { gsap } from "gsap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import SliderCard from "../../components/slider_card";

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
      y: 0,
      x: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".info",
        start: "top-=100 center+=200",
        end: "top top",
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
      {/* <div className="hero" ref={hero}>
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
      </div> */}
      <div className="video">
        <ReactPlayer
          url={
            "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676097185/Hero_R0_video_na%CC%80y_na%CC%86%CC%80m_o%CC%9B%CC%89_%C4%91a%CC%82%CC%80u_trang_p4ze7l.mp4"
          }
          playing={true}
          loop={true}
          volume={0}
          width="100%"
          height="100%"
        />
      </div>
      <div className="grid">
        <div className="div1">
          {/* <img src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019156/Lecol_3x_egqxyt.png" alt="" /> */}
          <SliderCard
            key="0"
            imgUrl={[
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019156/Lecol_3x_egqxyt.png",
              "https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800",
              "https://ik.imagekit.io/afysx8dz3/img/Lecol/Wiggins_AW22_Insta_Story_018.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018887363",
              "https://ik.imagekit.io/afysx8dz3/img/Lecol/C1_EN_FB-IG_s9x16_15s_017514_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018911213",
            ]}
          />
        </div>
        <div className="div2">
          <SliderCard
            key="1"
            imgUrl={[
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Volkwagen_3x_q6syei.png",
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019199/C2_ES_FB-IG_r9x16_15s_014366_R0_HERO_b7sicp.mp4",
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Volkwagen_3x_q6syei.png",
              "https://ik.imagekit.io/afysx8dz3/img/Volkwagen/C1_ES_FB-IG_r9x16_15s_014366_R2_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018935421",
            ]}
          />
        </div>
        <div className="div3">
          <SliderCard
            key="1"
            imgUrl={[
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019157/Bolt_3x_cd4rxl.png",
              "https://ik.imagekit.io/afysx8dz3/img/Bolt/C4_EN_TT_9x16_15s_018794_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018926418",
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019157/Bolt_3x_cd4rxl.png",
              "https://ik.imagekit.io/afysx8dz3/img/Bolt/C5_EN_TT_9x16_15s_018794_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018927902",
            ]}
          />
        </div>
        <div className="div4">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019134/Durex_00000_zdrygy.png"
            alt=""
          />
        </div>
        <div className="div5">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Viettel_3x_tacprn.png"
            alt=""
          />
        </div>
        <div className="div6">
          <SliderCard
            key="1"
            imgUrl={[
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019156/Envoy_helmet_3x_qgo4ke.png",
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019188/2_a7l8mp.jpg",
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019190/6_fvwuzq.jpg",
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019162/4_xuwvmm.jpg",
            ]}
          />
        </div>
        <div className="div7">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019154/Extrovert_3x_ktb4ak.png"
            alt=""
          />
        </div>
        <div className="div8">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019154/Explorer_3x_y0sdil.png"
            alt=""
          />
        </div>
        <div className="div9">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Mimosa_3x_buhcgs.png"
            alt=""
          />
        </div>
      </div>
      <div className="video2">
        <ReactPlayer
          url={
            "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676097178/smaller_brands_ca%CC%81i_na%CC%80y_video_o%CC%9B%CC%89_du%CC%9Bo%CC%9B%CC%81i_amzri0.mp4"
          }
          loop={true}
          volume={0}
          width="25%"
          height="100%"
          controls
        />
         <ReactPlayer
          url={
            "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019147/C1_EN_FB-IG_s9x16_15s_015861_R2_HERO_cotatm.mp4"
          }
          loop={true}
          volume={0}
          width="25%"
          height="100%"
          controls
        />
         <ReactPlayer
          url={
            "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019186/C2_EN_FB-IG_s9x16_15s_017514_R0_HERO_dpu6zs.mp4"
          }
          loop={true}
          volume={0}
          width="25%"
          height="100%"
          controls
        />
         <ReactPlayer
          url={
            "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019199/C2_ES_FB-IG_r9x16_15s_014366_R0_HERO_b7sicp.mp4"
          }
          loop={true}
          volume={0}
          width="25%"
          height="100%"
          controls
        />
      </div>
      <div className="project">
        <div className="info left">
          <h2 className="title">LECOL UK</h2>
          <p>
          While working as a motion designer at Shuttlerock, I got assigned to do a promotional video for LECOL UK, a Premium Performance cycling clothing brand based in UK. 
          </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
        <div className="project--img right">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019156/Lecol_3x_egqxyt.png"
            }
            alt=""
          />
        </div>
      </div>
      <div className="project">
        <div className="project--img left">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Volkwagen_3x_q6syei.png"
            }
            alt=""
          />
        </div>
        <div className="info right">
          <h2 className="title">Volkswagen Spain</h2>
          <p>
          Working with Volkswagen Spain was an exciting opportunity for me as I was tasked to create 2 video for their their new Volkswagen Taigo campaign
          </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
      </div>

      <div className="project">
        <div className="info left">
          <h2 className="title">Bolt</h2>
          <p>
          Collaborating with Bolt was a great experience. Their brand exudes a youthful and energetic vibe, and even though this campaign was for the TikTok platform, they remained open to new and innovative idea
I was assigned to produce two videos for them, one with a more modest and clean editing style, reminiscent of TikTok's native aesthetic.           </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
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
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019134/Durex_00000_zdrygy.png"
            }
            alt=""
          />
        </div>
        <div className="info right">
          <h2 className="title">Durex</h2>
          <p>
          Working with Durex was a great experience. They have a bold and impactful brand, defined by striking graphics and imagery. The process of creating their video was a bit challenging, as we had to decipher their exact vision. However, despite these difficulties, the final result was highly successful. And I learn a lot about working with a big brand that paid a lot of attention about its image branding.          </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
      </div>

      <div className="project">
        <div className="info left">
          <h2 className="title">Viettel</h2>
          <p>
          One of my proudest moments in Shuttlerock is when I was assigned to do a video for one of our subscriptions Viettel. Viettel is one of the largest telecom company in Vietnam, get to do a video for a big Vietnamese company was a dream come true           </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
        <div className="project--img right">
          <img
            src={
              "https://res.cloudinary.com/dhttps://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Viettel_3x_tacprn.pngfqnnkzvr/image/upload/v1676019156/Lecol_3x_egqxyt.png"
            }
            alt=""
          />
        </div>
      </div>
      <div className="project">
        <div className="project--img left">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019156/Envoy_helmet_3x_qgo4ke.png"
            }
            alt=""
          />
        </div>
        <div className="info right">
          <h2 className="title">Yanko X Keyshot</h2>
          <p>
          This project was my entry for redesign, and re-render a bicycle helmet, with the goal to make the existing helmet safer, more convenient, and more aesthetically pleasing.          </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
      </div>

      <div className="project">
        <div className="info left">
          <h2 className="title">The MIMOSA</h2>
          <p>
          The mimosa lamp was a lighting project at my university. To me, the Mimosa project is more than just a lamp. It's about inspiring the shy and introverted to open up and connect with the world. I believe that when you let your true self shine, you'll radiate a brighter light than ever before. The project also got 9/10 from my teachers in Univerisity
          </p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
        <div className="project--img right">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019149/untitled.244_bgc0x8.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="project">
        <div className="project--img left">
          <img
            src={
              "https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019197/CV_2021-09_fgmsku.png"
            }
            alt=""
          />
        </div>
        <div className="info right">
          <h2 className="title">EXTROVERT survival kit</h2>
          <p>
          This project is my graduation project when I was studying industrial design at the university of architecture in Ho Chi Minh City, Viet Nam. To this day, this is still one of my proudest projects, as I was a runner-up student for my year. The project got 8.7/10 from my graduation board. The product is a navigation + survival kit for the group.</p>
          <button onClick={() => navigate("/project")} className="btn">
            Get more info <FaArrowAltCircleRight className="icon" />
          </button>
        </div>
      </div>

    </div>




    
  );
};

export default Main;
