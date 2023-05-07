import "./nav.css";
import logo from "../images/bemologo.svg";
import blackLogo from "../images/bemologoblack.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const [black, setBlack] = useState(false);

    useEffect(() => {
        setBlack(location.pathname.includes("/projects/"));

        // You can use the following lines if you want to handle changes in the navigation
        const handleNavigationChange = () => {
            setBlack(location.pathname.includes("/projects/"));
        };

        window.addEventListener("popstate", handleNavigationChange);

        return () => {
            window.removeEventListener("popstate", handleNavigationChange);
        };
    }, [location]);

    return (
        <div className={`nav ${black && "black"}`}>
            <img src={logo} alt="" className="logo" />

            <div className="nav-cont">
                <button className="nav-link">
                    ABOUT
                </button>
                <button className="nav-link">
                    PROJECTS
                </button>
                <button className="nav-link">
                    CONTACT
                </button>
            </div>
        </div>
    );
};

export default Nav;
