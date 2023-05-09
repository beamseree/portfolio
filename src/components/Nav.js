import "./nav.css";
import logo from "../images/bemologo.svg";
import blackLogo from "../images/bemologoblack.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = (props) => {
    const location = useLocation();
    const [black, setBlack] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setBlack(location.pathname.includes("/projects/"));
        
        if (location.pathname.includes("/about")) {
            props.setAbout(true);
        } else {
            props.setAbout(false);
        }

        // You can use the following lines if you want to handle changes in the navigation
        const handleNavigationChange = () => {
            setBlack(location.pathname.includes("/projects/"));
        };

        window.addEventListener("popstate", handleNavigationChange);

        return () => {
            window.removeEventListener("popstate", handleNavigationChange);
        };
    }, [location]);

    const navigate = useNavigate();

    const handleNav = (path) => {
        setIsOpen(false);
        props.setSideCover(false)
        navigate("/" + path);
    };

    const handleLogo = () => {
        window.scrollTo(0, 0);
        navigate("/about");
    };

    return (
        <div className={`nav ${black && "black"}`}>
            <img src={logo} alt="" className="logo" onClick={() => handleLogo()} />

            <div
                className={`nav-menu-button ${isOpen && "open"}`}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <div className="nav-menu-line"></div>
                <div className="nav-menu-line bottom"></div>
            </div>

            <div className={`nav-popup`}>
                <div className={`nav-popup-cont ${!isOpen && "hide"}`}>
                    <button className="nav-link" onClick={() => handleNav("about")}>About</button>
                    <button className="nav-link" onClick={() => handleNav("projects")}>Projects</button>
                    <button className="nav-link" onClick={() => handleNav("contact")}>Contact</button>
                </div>
            </div>

            {/* <div className="nav-cont">
                <button className="nav-link">
                    About
                </button>
                <button className="nav-link" >
                    Projects
                </button>
                <button className="nav-link">
                    Contact
                </button>
            </div> */}
        </div>
    );
};

export default Nav;
