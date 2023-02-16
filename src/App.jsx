import './App.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);


function App() {

  const nav = useRef(null)

  const navigate = useNavigate()
  // useLayoutEffect(() => {
  //     gsap.fromTo(".nav",{
  //       background:"transparent",
  //       color:"#fff",
  //     }, {
  //         background:"#fff",
  //         color:"#000",
  //         scrollTrigger:{
  //         trigger: ".nav",
  //             start: "top top",
  //             end: "bottom center-=350",
  //             scrub: 2
  //         }
  //       });
  //     })

  return (
    <div className='app'>

       <div className="nav" ref={nav}>
        <div className="left">
        <img src="https://ik.imagekit.io/afysx8dz3/img/mid_logo_NGANG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676561176291" alt="" />
        </div>
        <div className="nav--box">
        <div className="nav--items" onClick={()=> {navigate("/info/main")}}>Projects</div>
        <div className="nav--items" onClick={()=> {navigate("/info/project",{state:{project:"3d"}})}}>3D Renders</div>
        <div className="nav--items" onClick={()=> {navigate("/info/about")}}>CV</div>
      </div>
        {/* <div className="right">
          <NavLink
            to="/info/main"
            className={({ isActive }) =>
              isActive ? "nav--box active" : "nav--box"
            }
          >
            design & marketing
          </NavLink>
          <NavLink
            to="/info/photograph"
            className={({ isActive }) =>
              isActive ? "nav--box active" : "nav--box"
            }
          >
            photography
          </NavLink>
          <NavLink
            to="/info/animation"
            className={({ isActive }) =>
              isActive ? "nav--box active" : "nav--box"
            }
          >
            3d & animation
          </NavLink>
          <NavLink
            to="/info/about"
            className={({ isActive }) =>
              isActive ? "nav--box active" : "nav--box"
            }
          >
            about me
          </NavLink>
        </div> */}
        
      </div>

        <Outlet />
      <div className=" section social">
         <a href="https://www.facebook.com/minhindustrialdesign"> <BsFacebook className="icon"/></a>
         <a href="https://www.instagram.com/boi_renaissance/"><BsInstagram className="icon"/></a>
         <a href='https://www.linkedin.com/in/nguyenhmink/'> <BsLinkedin className="icon"/></a>
          <a href="mailto: minhindustrialdesign@gmail.com"><SiGmail className="icon"/></a>
        </div>
        <div className="copy-right">Copyright © 2020 Nam Nguyen. All rights reserved.
</div>
      </div>
  );
}

export default App;
