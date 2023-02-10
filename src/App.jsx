import './App.scss';
import { matchPath, NavLink, Outlet } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);


function App() {

  const nav = useRef(null)

  useLayoutEffect(() => {
      gsap.fromTo(".nav",{
        background:"transparent",
        color:"#fff",
      }, {
          background:"#fff",
          color:"#000",
          scrollTrigger:{
          trigger: ".nav",
              start: "top top",
              end: "bottom center-=350",
              scrub: 2
          }
        });
      })

  return (
    <div className='app'>

       <div className="nav" ref={nav}>
        <div className="left">
          <h1 className="name--title">Rusto Ramous</h1>
          <div className="role">design • marketing • photography</div>
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
          <BsFacebook className="icon"/>
          <BsInstagram className="icon"/>
          <BsLinkedin className="icon"/>
          <SiGmail className="icon"/>
        </div>
        <div className="copy-right">Copyright © 2020 Nam Nguyen. All rights reserved.
</div>
      </div>
  );
}

export default App;
