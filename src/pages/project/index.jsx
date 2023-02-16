import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import "./project.scss";

const Project = () => {
  const { state } = useLocation();
  if (state.project === "lecol")
    return (
      <div className="projectComp">
        <h1 className="title">LECOL UK</h1>
        <p className="para para1">
          While working as a motion designer at Shuttlerock, I got assigned to
          do a promotional video for LECOL UK, a Premium Performance cycling
          clothing brand based in UK. <br />
          <br />
          The campaign for the video is about introducing Le Col and our unique
          selling points to a new audience They order two videos for this
          campaign
          <br />
          One is for Facebook / Instagram stories
          <br />
          One is for Facebook / Instagram reels
          <br />
          <br />
          Till now, they are still my favorite brand to work with, they have
          very clean and modern branding.
        </p>
        <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div>
        <div className="video">
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/Lecol/C1_EN_FB-IG_s9x16_15s_017514_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018911213"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/Lecol/C2_EN_FB-IG_s9x16_15s_017514_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018905627"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
        </div>
      </div>
    );
  else if (state.project === "volkswagen")
    return (
      <div className="projectComp">
        <h1 className="title">Volkswagen Spain</h1>
        <p className="para para1">
          Working with Volkswagen Spain was an exciting opportunity for me as I
          was tasked to create 2 video for their their new Volkswagen Taigo
          campaign.
          <br />
          <br />
          The brief was to make 2 video
          <br />
          One is for Facebook / Instagram stories
          <br />
          One is for Facebook / Instagram reels
          <br />
          <br />
          The highlight of the project was the positive feedback I received from
          the client regarding the concept I developed for Facebook/Instagram
          Stories. I took a bold approach and deviated from the conventional
          approach, and it paid off as the results were quite surprising to me.
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <ReactPlayer
            url={
              "https://res.cloudinary.com/dfqnnkzvr/video/upload/v1676019146/C1_ES_FB-IG_r9x16_15s_014366_R2_HERO_vyodp3.mp4"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/Volkwagen/C2_ES_FB-IG_r9x16_15s_014366_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018925243"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
        </div>
      </div>
    );
  else if (state.project === "bolt")
    return (
      <div className="projectComp">
        <h1 className="title">Bolt</h1>
        <p className="para para1">
          Collaborating with Bolt was a great experience. Their brand exudes a
          youthful and energetic vibe, and even though this campaign was for the
          TikTok platform, they remained open to new and innovative ideas <br />
          <br />
          I was assigned to produce two videos for them, one with a more modest
          and clean editing style, reminiscent of TikTok's native aesthetic.
          <br />
          For the second video, they were looking for something a bit more
          daring and radical.
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/Bolt/C5_EN_TT_9x16_15s_018794_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018927902"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/Bolt/C4_EN_TT_9x16_15s_018794_R0_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018926418"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
        </div>
      </div>
    );
  else if (state.project === "durex")
    return (
      <div className="projectComp">
        <h1 className="title">Durex</h1>
        <p className="para para1">
          Working with Durex was a great experience. They have a bold and
          impactful brand, defined by striking graphics and imagery. The process
          of creating their video was a bit challenging, as we had to decipher
          their exact vision. However, despite these difficulties, the final
          result was highly successful. And I learn a lot about working with a
          big brand that paid a lot of attention about its image branding.
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/Bolt/New_thumbnail/Durex_00000.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676557399579"
            alt=""
          />
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/Durex/C1_EN_FB-IG_s9x16_15s_015861_R2_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676018913292"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
        </div>
      </div>
    );
  else if (state.project === "viettel")
    return (
      <div className="projectComp">
        <h1 className="title">Viettel</h1>
        <p className="para para1">
          One of my proudest moments in Shuttlerock is when I was assigned to do
          a video for one of our subscriptions Viettel. Viettel is one of the
          largest telecom company in Vietnam, get to do a video for a big
          Vietnamese company was a dream come true
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <img
            className="w50"
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019158/Viettel_3x_tacprn.png"
            alt=""
          />
          <ReactPlayer
            url={
              "https://ik.imagekit.io/afysx8dz3/img/C1_VI_FB-IG_s1x1_15s_013696_R1_HERO.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1676560851385"
            }
            width={"50%"}
            height={"100%"}
            loop={true}
            volume={0}
            controls
          />
        </div>
      </div>
    );
  else if (state.project === "survival")
    return (
      <div className="projectComp">
        <h1 className="title">Survival kit</h1>
        <p className="para para1">
          This project is my graduation project when I was studying industrial
          design at the university of architecture in Ho Chi Minh City, Viet
          Nam.
          <br />
          <br />
          To this day, this is still one of my proudest projects, as I was a
          runner-up student for my year. The project got 8.7/10 from my
          graduation board
          <br />
          <br />
          The product is a navigation + survival kit for the group.
          <br />
          <br />
          It helps people stay connected to each other when there is no wifi or
          cellphone service. Or staying alive by yourself when there is no one.
          The product can be summed up by three keywords:
          <br />
          <br />
          Navigation - communicate – survival
          <br />
          <br />
          The Explorer: Multi-purpose flashlight for adventuring.
          <br />
          <br />
          This was a precursor of the Extrovert survival kit, I design this
          product as a pre-graduation project. That's why I decided to keep
          developing THE EXPLORER into EXTROVERT. The graduation board gave me
          an 8.7/10 rating on the project and it was a great way for me to
          improve my 3D rendering skills.
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/EXTROVERT/CV_2021-10.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676018877250"
            alt=""
          />
             <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/EXTROVERT/CV_2021-09.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676018882374"
            alt=""
          />
            <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/EXTROVERT/CV_2021-19.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676018880615"
            alt=""
          />  
           <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/EXTROVERT/CV_2021-28.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676018879424"
            alt=""
          />  
          
        </div>
      </div>
    );
    else if (state.project === "explorer")
    return (
      <div className="projectComp">
        <h1 className="title">Explorer</h1>
        <p className="para para1">
          This project is my graduation project when I was studying industrial
          design at the university of architecture in Ho Chi Minh City, Viet
          Nam.
          <br />
          <br />
          To this day, this is still one of my proudest projects, as I was a
          runner-up student for my year. The project got 8.7/10 from my
          graduation board
          <br />
          <br />
          The product is a navigation + survival kit for the group.
          <br />
          <br />
          It helps people stay connected to each other when there is no wifi or
          cellphone service. Or staying alive by yourself when there is no one.
          The product can be summed up by three keywords:
          <br />
          <br />
          Navigation - communicate – survival
          <br />
          <br />
          The Explorer: Multi-purpose flashlight for adventuring.
          <br />
          <br />
          This was a precursor of the Extrovert survival kit, I design this
          product as a pre-graduation project. That's why I decided to keep
          developing THE EXPLORER into EXTROVERT. The graduation board gave me
          an 8.7/10 rating on the project and it was a great way for me to
          improve my 3D rendering skills.
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/Explorer/image-043.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906423"
            alt=""
          />
             <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/Explorer/image-055.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018903394"
            alt=""
          />
            <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/Explorer/image-044.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018909693"
            alt=""
          />  
           <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/Explorer/image-045.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018908906"
            alt=""
          />  
          
        </div>
      </div>
    );
    else if (state.project === "mimosa")
    return (
      <div className="projectComp">
        <h1 className="title">The Mimosa</h1>
        <p className="para para1">
        The mimosa lamp was a lighting project at my university. 
<br /> <br />
To me, the Mimosa project is more than just a lamp. It's about inspiring the shy and introverted to open up and connect with the world. I believe that when you let your true self shine, you'll radiate a brighter light than ever before.
<br /> <br />

The project also got 9/10 from my teachers in Univerisity
        </p>
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/MIMOSA/untitled.244.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018900053"
            alt=""
          />
         <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/MIMOSA/untitled.243.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018901821"
            alt=""
          />
           <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/MIMOSA/ptsed_lamp1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018897745"
            alt=""
          />
         <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/MIMOSA/distric_8_owl.7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018901520"
            alt=""
          />
        </div>
      </div>
    );
    else if (state.project === "3d")
    return (
      <div className="projectComp">
      
        {/* <div className="hero">
          <img
            src="https://res.cloudinary.com/dfqnnkzvr/image/upload/v1676019159/Wiggins_AW22_Insta_Story_018_ee9tpx.jpg"
            alt=""
          />
          <img
            src="https://ik.imagekit.io/afysx8dz3/img/Lecol/Stories_Image_4_023.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676018906800"
            alt=""
          />
        </div> */}
        <div className="video">
          <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/3d_render_and_sketches/40.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676561150606"
            alt=""
          />
         <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/3d_render_and_sketches/38.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676561150509"
            alt=""
          />
           <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/3d_render_and_sketches/61.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676561150472"
            alt=""
          />
         <img
            className="w50"
            src="https://ik.imagekit.io/afysx8dz3/img/3d_render_and_sketches/60.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676561150419"
            alt=""
          />
        </div>
      </div>
    );
};

export default Project;
