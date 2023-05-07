import React, { useRef, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Pannellum } from "pannellum-react";
import { useFetcher, useNavigate } from "react-router-dom";

import "../style/projects.css";
import "../style/global.css";
import bnw from "../images/room2.png";
import room from "../images/room2-col.jpg";
import ProjectScroll from "../components/ProjectScroll";
import Asos from "../projects/Asos/Asos";

const Projects = (props) => {
  const [currentScene, setCurrentScene] = useState(bnw);
  const [pitch, setPitch] = useState(2);
  const [yaw, setYaw] = useState(252);
  const [hfov, setHfov] = useState(90);

  const [isFading, setIsFading] = useState(false);
  const [isChoosing, setIsChoosing] = useState(false);

  const [currentProject, setCurrentProject] = useState(0);
  const currentProjectRef = useRef(currentProject);
  const [tint, setTint] = useState({});

  const [projectSub, setProjectSub] = useState("Projects");
  const [projectCat, setProjectCat] = useState("Website & Branding");

  useEffect(() => {
    currentProjectRef.current = currentProject;
    setProjectCat(projectCats[currentProject])
    setTint({
      "backgroundColor": projectColors[currentProject],
    });
  }, [currentProject]);

  props.setShowNav(false);

  const [loader, setLoader] = useState("loader");
  const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1);
  // };

  // if (!props.didEnter) {
  //   navigate('/')
  // }

  useEffect(() => {
    // soundOnRef.current && clickenter.play();
    if (props.leavePage) {
      setTimeout(() => {
        // soundOnRef.current && whoosh.play();
          setTimeout(() => {
              navigate("/")
              props.setLeavePage(false)
          }, "400");
      }, "320");
      setHfov(30);
      setIsFading(true);
    }

  }, [props.leavePage])

  const [toggle, setToggle] = useState(true);

  const showColor = () => {
    const test = document.querySelectorAll(".black-tint")[0];
    test.classList.add("black");
  };
  const hideColor = () => {
    const test = document.querySelectorAll(".black-tint")[0];
    test.classList.remove("black");
  };

  const textItems = [
    "UMA BY VEYLA",
    "PARC CAPITAL",
    "TEB",
    "SEEDLABS",
    "GIFTO",
    "JUMBO SHACK",
    "ASOS REDESIGN",
  ];

  const projectColors = [
    "#c4c4c4",
    "#FFE5D2",
    "#D2D4FF",
    "#c4c4c4",
    "#DED2FF",
    "#D2ECFF",
    "#c4c4c4",
  ];

  const projectCats = [
    "Branding & Website",
    "Branding & Website",
    "Website",
    "Branding",
    "Branding & Website",
    "Website",
    "Website",
  ];

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.addEventListener("mousemove", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const {width, height} = buttonRef.current.getBoundingClientRect();
      const halfWidth = width / 2;
      const halfHeight = height / 2;
      const rotateY = ((x - halfWidth) / halfWidth) *-15;
      const rotateX = ((y - halfHeight) / halfHeight) * 15;
      buttonRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    buttonRef.current.addEventListener("mouseleave", () => {
      buttonRef.current.style.transform = `rotate(0deg)`;
    });
  }, [])

  const handleProject = () => {
    //currentProjectRef.current = currentProject;
    console.log(currentProjectRef.current);
    setTimeout(() => {
      // soundOnRef.current && whoosh.play();
        setTimeout(() => {
            navigate("/projects/asos")
            props.setLeavePage(false)
        }, "400");
      }, "320");
    setIsFading(true);
    setHfov(30);
  }

  return (
    <div className={`main-container ${isFading && "fade"}`}>

      <ProjectScroll
        textItems={textItems}
        showColor={showColor}
        hideColor={hideColor}
        setCurrentProject={setCurrentProject}
        setYaw={setYaw}
        setIsChoosing={setIsChoosing}
      />

      <div className={`project-info-container ${isChoosing && "choosing"}`}>
        <p className="project-sub">{projectSub}</p>
        <p className="project-cat">{projectCat}</p>
        <button ref={buttonRef} onClick={() => {handleProject()}}>VIEW PROJECT</button>
      </div>

      <div className="project-container">
        {/* <button onClick={change}>Change</button> */}
        <div className="black-scene-container">
          <div className="color-tint black" style={tint}></div>
          <Pannellum
            disableKeyboardCtrl={true}
            doubleClickZoom={false}
            image={bnw}
            width="100%"
            height="100%"
            yaw={262}
            hfov={hfov}
            pitch={pitch}
            // autoRotate={-0.5}
            autoLoad
            draggable={false}
            showControls={false}
            mouseZoom={false}
            keyboardZoom={false}
            onLoad={() => {
              setTimeout(() => {
                setLoader("loader fade");
                setHfov(130);
              }, "150");
              setTimeout(() => {
                setLoader("loader fade gone");
              }, "900");
            }}
          ></Pannellum>
        </div>

        <div className="tint-container">
          <div className="black-tint">
            <div className="color-scene-container">
              <Pannellum
                disableKeyboardCtrl={true}
                doubleClickZoom={false}
                image={room}
                width="100vw"
                height="100vh"
                yaw={262}
                // autoRotate={-5}
                hfov={hfov}
                pitch={2}
                autoLoad
                draggable={false}
                showControls={false}
                mouseZoom={false}
                keyboardZoom={false}
              ></Pannellum>
            </div>
          </div>
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

export default Projects;
