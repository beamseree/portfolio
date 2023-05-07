import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pannellum } from "pannellum-react";

import "../style/home.css";
import "../style/global.css";

import bgSound from "../sounds/bg.webm";
import enterSound from "../sounds/clickenter.mp3";
import wooshSound from "../sounds/woosh.mp3";

import header from "../images/beamheader.svg";
import uiTop from "../images/ui-top.svg";
import uiBottom from "../images/ui-bottom.svg";

import background from "../images/anime_art_style_planets.jpeg";

const Home = (props) => {
    const [loader, setLoader] = useState('loader')
  const [currentScene, setCurrentScene] = useState(background);
  const [pitch, setPitch] = useState(30);
  const [yaw, setYaw] = useState(312);
  const [hfov, setHfov] = useState(110);
  const [ripple, setRipple] = useState("btn");
  const [overlay, setOverlay] = useState("intro-overlay");
  const [ui, setUi] = useState(false);
  const [border, setBorder] = useState("border");

  const [isFading, setIsFading] = useState(false);

  const soundOnRef = useRef(props.soundOn);

  props.setShowNav(true)



  useEffect(() => {
    soundOnRef.current = props.soundOn;
  }, [props.soundOn]);

  var clickenter = new Audio(enterSound);
  clickenter.volume = 0.04;

  var whoosh = new Audio(wooshSound);
  whoosh.volume = 0.2;

  useEffect(() => {
    if (props.goTo === "ABOUT") {
        if (same(315, 2)) {
            setYaw(yaw + 0.01);
            setPitch(pitch + 0.001);
        } else {
            setYaw(315);
            setPitch(2);
        }
      props.setGoTo('')
    }
    else if (props.goTo === "about") {
        if (same(315, -15)) {
            setYaw(yaw + 0.01);
            setPitch(pitch + 0.001);
        } else {
            setYaw(315);
            setPitch(-15);
        }
      props.setGoTo('')
    }
    else if (props.goTo === "PROJECTS" || props.goTo === "projects") {
        if (same(-182, 1)) {
            setYaw(yaw + 0.01);
            setPitch(pitch + 0.001);
        } else {
            setYaw(-182);
            setPitch(1);
        }
        props.setGoTo('')
      }
      else if (props.goTo === "CONTACT" || props.goTo === "contact") {
        if (same(83, 43.5)) {
            setYaw(yaw + 0.01);
            setPitch(pitch + 0.001);
        } else {
            setYaw(83);
            setPitch(43.5);
        }
          props.setGoTo('')
        }
  }, [props.goTo]); 

  function same(iYaw, iPitch) {
    if (iYaw == yaw && iPitch == pitch) {
        return true;
    }
    return false;
  }

  const navigate = useNavigate()

  const aboutClick = (navTo) => {
    soundOnRef.current && clickenter.play();
    setTimeout(() => {
      soundOnRef.current && whoosh.play();
        setTimeout(() => {
            navigate("/" + navTo)
        }, "400");
    }, "320");
    setHfov(30);
    props.setGoTo(navTo)
    setIsFading(true);
  };

  const enter = (sound) => {
    setRipple("btn ripple");
    props.setSoundOn(sound);
    props.setLogoCont("logo-container small");
    setBorder("border full");
    if (sound) {
      soundOnRef.current && clickenter.play();
    }

    setTimeout(() => {
      var bgMusic = new Audio(bgSound);
      bgMusic.volume = 0.1;

      soundOnRef.current && whoosh.play();
      soundOnRef.current && bgMusic.play();

      setYaw(315);
      setHfov(110);
      setPitch(2);
      setOverlay("intro-overlay hide");
      setTimeout(() => {
        setUi(true);
        props.setDidEnter(true);
        setOverlay("intro-overlay hide gone");
      }, "1000");
    }, "300");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if(props.didEnter == true) {
        setTimeout(() => {
            props.setLogoCont("logo-container small");
            setBorder("border full");
      
            setYaw(315);
            setHfov(110);
            setPitch(2);
            setTimeout(() => {
              setUi(true);
              setOverlay("intro-overlay hide gone");
            }, "1000");
          }, "300");
    }

  }, [])

  function handleMouseEnter(hotspot) {
    if (hotspot == "about") {
        props.setScrollTo(0)
        props.setGoTo('ABOUT')
    }
    else if (hotspot == "projects") {
        props.setScrollTo(1)
        props.setGoTo('PROJECTS')
    }
    else if (hotspot == "contact") {
        props.setScrollTo(2)
        props.setGoTo('CONTACT')
    }
  }
  
  // Function to handle the mouseleave event
  function handleMouseLeave() {
  }

  return (
    <div className={`main-container ${isFading && "fade"}`}>
      <div className="home-container">
        <div className='scene-container'>
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
            autoRotate={-1}
            showControls={false}
            mouseZoom={false}
            keyboardZoom={false}
            onLoad={() => {

                const about = document.querySelectorAll('.about-hotspot')[0];
                if (about) {
                    about.addEventListener('mouseenter', () => (handleMouseEnter('about')));
                }
                const projects = document.querySelectorAll('.projects-hotspot')[0];
                if (projects) {
                    projects.addEventListener('mouseenter', () => (handleMouseEnter('projects')));
                }
                const contact = document.querySelectorAll('.contact-hotspot')[0];
                if (contact) {
                    contact.addEventListener('mouseenter', () => (handleMouseEnter('contact')));
                }

                const firstScene = document.querySelectorAll('.pnlm-render-container');
                if(firstScene.length > 1) {
                    firstScene[0].remove();
                    const firstGrab = document.querySelectorAll('.pnlm-grab')[0];
                    firstGrab.remove();
                }

                setTimeout(() => {
                    setLoader('loader fade')
                    setTimeout(() => {
                        setLoader("loader fade gone");
                    }, "800");
                }, "200");
            }}
          >
            <Pannellum.Hotspot
              type="custom"
              cssClass="about-hotspot"
              pitch={345}
              yaw={314.7}
              name="hs1"
              handleClick={(evt, args) => aboutClick('about')}
            />
            <Pannellum.Hotspot
              type="custom"
              cssClass="projects-hotspot"
              pitch={1}
              yaw={-182}
              name="hs2"
              handleClick={(evt, args) => aboutClick('projects')}
            />
            <Pannellum.Hotspot
              type="custom"
              cssClass="contact-hotspot"
              pitch={43.5}
              yaw={83}
              name="hs3"
              handleClick={(evt, args) => aboutClick(args.name)}
            />
          </Pannellum>
        </div>
        <div className="border-container">
          <div className="ui-container">
            <img src={uiTop} alt="" className={`ui-top ${ui && "show"}`} />
            <img
              src={uiBottom}
              alt=""
              className={`ui-bottom ${ui && "show"}`}
            />
            <div className={border}></div>
          </div>
        </div>

        <div className="clickdrag">Click and drag to explore</div>
        
        {!props.didEnter && 
            <div className={overlay}>
            <img src={header} alt="" className="header" />
            <p>
                I’m a designer and developer based in Bangkok. I help startups to
                grow their digital presence by integrating unique, creative design
                with strategic storytelling and brand creation.
            </p>

            <button onClick={() => enter(true)} className={ripple}>
                <span className="btn-span">ENTER</span>
            </button>

            <button
                onClick={() => {
                enter(false);
                }}
                className="enter-mute"
            >
                Enter without sound
            </button>
            </div>
        }
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

export default Home;
