import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Scroll from "./components/Scroll";
import { useState, useEffect, useRef } from "react";
import Projects from "./pages/Projects";
import logo from "./images/bemologo.svg";
import { useLocation } from "react-router-dom"
import Asos from "./projects/Asos/Asos";

function App() {
  const textItems = ["ABOUT", "PROJECTS", "CONTACT"];

  const [current, setCurrent] = useState("");
  const [goTo, setGoTo] = useState("");
  const [didEnter, setDidEnter] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [scrollTo, setScrollTo] = useState(-1);
  const [showNav, setShowNav] = useState(false);
  const [logoCont, setLogoCont] = useState("logo-container");
  const [leavePage, setLeavePage] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHome = () => {
    if (window.location.pathname != "/") {

      setLeavePage(true)
    }
  }

  return (
    <Router>
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
      {/* <div className={logoCont}>
        <img src={logo} alt="" className="logo" onClick={() => {goHome()}}/>
      </div> */}

      {/* <div className="nav-cont">
        <button className="nav-link">ABOUT</button>
        <button className="nav-link">PROJECTS</button>
        <button className="nav-link">CONTACT</button>
      </div> */}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
            setShowNav={setShowNav}
            setLogoCont={setLogoCont}
              current={current}
              didEnter={didEnter}
              setDidEnter={setDidEnter}
              setSoundOn={setSoundOn}
              soundOn={soundOn}
              setScrollTo={setScrollTo}
              goTo={goTo}
              setGoTo={setGoTo}
            />
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
            />
          }
        ></Route>
        <Route
          path="/projects"
          element={
            <Projects
            setLeavePage={setLeavePage}
            leavePage={leavePage}
            setShowNav={setShowNav}
              current={current}
              didEnter={didEnter}
              setDidEnter={setDidEnter}
              setSoundOn={setSoundOn}
              soundOn={soundOn}
              setScrollTo={setScrollTo}
              goTo={goTo}
              setGoTo={setGoTo}
            />
          }
        ></Route>
        <Route path="/projects/asos" element={<Asos />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
