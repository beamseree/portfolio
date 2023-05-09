import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Scroll from "./components/Scroll";
import { useState, useEffect, useRef } from "react";
import Projects from "./pages/Projects";

import me from "./images/me-pfp.png"

import room from "./images/room2-col.jpg";
import bnw from "./images/room2.png";
import Asos from "./projects/Asos/Asos";
import Nav from "./components/Nav";
import { Pannellum } from "pannellum-react";
import Gifto from "./projects/Gifto/Gifto";
import Contact from "./pages/Contact";
import Jumbo from "./projects/Jumbo/Jumbo";
import HolidayInn from "./projects/HolidayInn/HolidayInn";
import Default from "./pages/Default";

function App() {
    const [pitch, setPitch] = useState(2);
    const [yaw, setYaw] = useState(348);
    const [hfov, setHfov] = useState(90);
    const [tint, setTint] = useState({});
    const [loader, setLoader] = useState("loader");

    const textItems = ["ABOUT", "PROJECTS", "CONTACT"];

    const [current, setCurrent] = useState("");
    const [goTo, setGoTo] = useState("");
    const [didEnter, setDidEnter] = useState(false);
    const [soundOn, setSoundOn] = useState(true);
    const [scrollTo, setScrollTo] = useState(-1);
    const [showNav, setShowNav] = useState(false);
    const [projectTint, setProjectTint] = useState(false);

    const [about, setAbout] = useState(false);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const [sideCover, setSideCover] = useState(false);

    return (
        <Router>
            <Nav setSideCover={setSideCover} setAbout={setAbout}/>
            <div className={`side-cover ${!sideCover && "hidden"}`}></div>

            {didEnter && showNav && (
                <Scroll
                    textItems={textItems}
                    onEnter={setCurrent}
                    soundOn={soundOn}
                    scrollTo={scrollTo}
                    setScrollTo={setScrollTo}
                    setGoTo={setGoTo}
                />
            )}

              <div className={`about-bg ${!about && "slide-in"}`}></div>
              <img src={me} alt="" className={`me ${!about && "slide-up"}`} />


            {/* <div className={logoCont}>
        <img src={logo} alt="" className="logo" onClick={() => {goHome()}}/>
      </div> */}

            {/* <div className="nav-cont">
        <button className="nav-link">ABOUT</button>
        <button className="nav-link">PROJECTS</button>
        <button className="nav-link">CONTACT</button>
      </div> */}
            <div className={loader}></div>
            <div className="project-container">
                {/* <button onClick={change}>Change</button> */}
                <div className="black-scene-container">
                    {projectTint && (
                        <div className="color-tint black" style={tint}></div>
                    )}
                    <div
                        className="color-tint black"
                        style={{ backgroundColor: "#c5c5c5" }}
                    ></div>
                    <Pannellum
                        disableKeyboardCtrl={true}
                        doubleClickZoom={false}
                        image={bnw}
                        width="100%"
                        height="100%"
                        yaw={yaw}
                        hfov={hfov}
                        pitch={pitch}
                        // autoRotate={-0.5}
                        autoLoad
                        draggable={false}
                        showControls={false}
                        mouseZoom={false}
                        keyboardZoom={false}
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
                                yaw={yaw}
                                // autoRotate={-5}
                                hfov={hfov}
                                pitch={2}
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
                    </div>
                </div>
            </div>

            <Routes>
                <Route
                    path="/"
                    exact
                    element={<Default />
                        // <Home
                        //     setShowNav={setShowNav}
                        //     setLogoCont={setLogoCont}
                        //     current={current}
                        //     didEnter={didEnter}
                        //     setDidEnter={setDidEnter}
                        //     setSoundOn={setSoundOn}
                        //     soundOn={soundOn}
                        //     setScrollTo={setScrollTo}
                        //     goTo={goTo}
                        //     setGoTo={setGoTo}
                        // />
                    }
                ></Route>
                <Route
                    path="/about"
                    element={
                        <About
                            setShowNav={setShowNav}
                            current={current}
                            didEnter={didEnter}
                            setDidEnter={setDidEnter}
                            setSoundOn={setSoundOn}
                            soundOn={soundOn}
                            setScrollTo={setScrollTo}
                            goTo={goTo}
                            setGoTo={setGoTo}
                            setHfov={setHfov}
                            setYaw={setYaw}
                        />
                    }
                ></Route>
                <Route
                    exact
                    path="/projects"
                    element={
                        <Projects
                            setShowNav={setShowNav}
                            current={current}
                            didEnter={didEnter}
                            setDidEnter={setDidEnter}
                            setSoundOn={setSoundOn}
                            soundOn={soundOn}
                            setScrollTo={setScrollTo}
                            setGoTo={setGoTo}
                            setTint={setTint}
                            setHfov={setHfov}
                            setYaw={setYaw}
                            setSideCover={setSideCover}
                            setProjectTint={setProjectTint}
                        />
                    }
                ></Route>
                <Route
                    path="/contact"
                    element={<Contact setYaw={setYaw} />}
                ></Route>

                <Route path="/projects/asos" element={<Asos />}></Route>
                <Route path="/projects/gifto" element={<Gifto />}></Route>
                <Route path="/projects/jumboshack" element={<Jumbo />}></Route>
                <Route path="/projects/holidayinn" element={<HolidayInn />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
