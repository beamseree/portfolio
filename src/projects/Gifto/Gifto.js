import "../../style/projectpage.css";
import { useEffect, useRef } from "react";

import display from "./gifto-display.png";
import display2 from "./gifto-display2.png";
import pov from "./pov.png"
import empathy from "./empathy.png"
import user from "./user.png"
import lofi from "./lofi.png"

import welcome from "./welcome.png"
import signin from "./signin.png"
import home from "./home.png"
import charity from "./charity.png"

const Gifto = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.classList.remove("fade");
            window.scrollTo(0, 0);
        }, 500);
    }, []);

    return (
        <div className="project-page-container">
            <div className="project-page-content fade" ref={containerRef}>
                <div className="products-padding">
                    <div className="pp-hero ">
                        <div className="pp-hero-top">
                            <p className="breadcrumb">PROJECTS/</p>
                            <h1 className="pp-title">GIFTO</h1>
                        </div>
                        <div className="pp-hero-bottom">
                            <div className="pp-overview-container">
                                <p className="hero-bottom-title">
                                    PROJECT OVERVIEW
                                </p>
                                <p className="project-overview-text">
                                    A UX Case Study for a donation mobile app
                                    called GIFTO
                                </p>
                            </div>
                            <div className="pp-service-container">
                                <p className="hero-bottom-title">SERVICES</p>
                                <p className="project-item-text">
                                    UX & UI Design
                                </p>
                                <p className="project-item-text">
                                    Mobile Design
                                </p>
                            </div>
                            <div className="pp-info-container">
                                <div className="pp-info">
                                    <p className="hero-bottom-title">DATE</p>
                                    <p className="project-item-text">
                                        Feb 2023
                                    </p>
                                </div>
                                <div className="pp-info">
                                    <p className="hero-bottom-title">CLIENT</p>
                                    <p className="project-item-text">
                                        GIFTO (Mock)
                                    </p>
                                </div>
                                <div className="pp-info">
                                    <p className="hero-bottom-title">
                                        LOCATION
                                    </p>
                                    <p className="project-item-text">USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={display} alt="" className="pp-img-full display" />

                <div className="products-padding">
                    <div className="pp-body">
                        <p className="pp-heading1">RESEARCH</p>
                        <p className="pp-heading2" style={{marginBottom: "-120px"}}>POV STATEMENT</p>
                        <img src={pov} alt="" className="pp-img-full" />
                        <p className="pp-heading2" style={{marginBottom: "-120px"}}>EMPATHY MAP</p>
                        <img src={empathy} alt="" className="pp-img-full" />
                        <p className="pp-heading2" style={{marginBottom: "-120px"}}>USER PERSONA & JOURNEY</p>
                        <img src={user} alt="" className="pp-img-full" />

                        <p className="pp-heading1">LO-FI WIREFRAME</p>
                        <img src={lofi} alt="" className="pp-img-full" />

                        </div>
                </div>

                <img src={display2} alt="" className="pp-img-full display" />

                <div className="products-padding">
                    <div className="pp-body">
                        <p className="pp-heading1">FINAL DESIGNS</p>
                        <div className="four-img">
                            <img src={welcome} alt="" className="pp-img-four" />
                            <img src={signin} alt="" className="pp-img-four" />
                            <img src={home} alt="" className="pp-img-four" />
                            <img src={charity} alt="" className="pp-img-four" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gifto;
