import "../../style/projectpage.css";
import { useEffect, useRef } from "react";

import display from "./jumbo-display.png"
import jumbo from "./jumbo.mp4"
import overlay from "./overlay.png"

const Jumbo = () => {
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
                            <h1 className="pp-title">JUMBO SHACK</h1>
                        </div>
                        <div className="pp-hero-bottom">
                            <div className="pp-overview-container">
                                <p className="hero-bottom-title">
                                    PROJECT OVERVIEW
                                </p>
                                <p className="project-overview-text">
                                    I designed and developed a website for a
                                    fake restaurant called Jumbo Shack
                                </p>
                            </div>
                            <div className="pp-info-container">
                                <div className="pp-info">
                                    <p className="hero-bottom-title">
                                        SERVICES
                                    </p>
                                    <p className="project-item-text">
                                        UX & UI Design
                                    </p>
                                    <p className="project-item-text">
                                        Development
                                    </p>
                                </div>
                                <div className="pp-info">
                                    <p className="hero-bottom-title" style={{marginBottom: 21}}>
                                        LIVE SITE
                                    </p>
                                    <a
                                        href="https://zesty-salamander-5b2cc2.netlify.app/index.html"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pp-link"
                                    >
                                        Open Website
                                    </a>
                                </div>
                            </div>
                            <div className="pp-info-container">
                                <div className="pp-info">
                                    <p className="hero-bottom-title">DATE</p>
                                    <p className="project-item-text">
                                        Apr 2023
                                    </p>
                                </div>
                                <div className="pp-info">
                                    <p className="hero-bottom-title">CLIENT</p>
                                    <p className="project-item-text">
                                        Jumbo Shack
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
                        <p className="pp-heading1">SHOWCASE</p>
                        <video src={jumbo} muted loop autoPlay className="pp-img-full mock" />
                        <img src={overlay} alt="" className="overlay" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbo;
