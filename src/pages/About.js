import React, { useRef, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Pannellum } from "pannellum-react";
import { useNavigate } from "react-router-dom";

import "../style/about.css";
import sakura from "../images/sakura.jpeg";

const About = (props) => {
  const [currentScene, setCurrentScene] = useState(sakura);
  const [pitch, setPitch] = useState(2);
  const [yaw, setYaw] = useState(295);
  const [hfov, setHfov] = useState(90);

  const [isFading, setIsFading] = useState(false);


  props.setShowNav(false)

  const [loader, setLoader] = useState("loader");
  const navigate = useNavigate();
  const goBack = () => {
      navigate(-1);
  }

  if (!props.didEnter) {
    navigate('/')
  }

  return (
    <div className={`main-container ${isFading && "fade"}`}>
      <div className="home-container">
        <div className="scene-container">
          <Pannellum
            disableKeyboardCtrl={true}
            doubleClickZoom={false}
            image={currentScene}
            width="100%"
            height="100%"
            yaw={yaw}
            hfov={hfov}
            pitch={pitch}
            autoLoad
            draggable={false}
            autoRotate={-0.5}
            showControls={false}
            mouseZoom={false}
            keyboardZoom={false}
            onLoad={() => {
              setTimeout(() => {
                setLoader("loader fade");
                setHfov(110);
              }, "150");
              setTimeout(() => {
                setLoader("loader fade gone");
              }, "900");
            }}
          ></Pannellum>
        </div>
      </div>

      {/* <div className="scroll-container">
          <div className="nav-item">
            <p className="option">ABOUT</p>
          </div>
          <div className="nav-item">
            <p className="option">PROJECTS</p>
          </div>
          <div className="nav-item">
            <p className="option">CONTACT</p>
          </div>
        </div> */}
      <div className={loader}></div>
    </div>
  );
};

export default About;
