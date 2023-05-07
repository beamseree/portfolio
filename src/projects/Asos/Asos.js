import "../../style/projectpage.css";
import beforehero from "./before-home-hero.png";
import beforebrowse from "./before-browse.png";
import overlay from "./overlay.png";
import homeredesign from "./homeredesign.png";
import browserdesign from "./browseredesign.png";
import homedisplay from "./homedisplay.png";
import productsdisplay from "./productsdisplay.png";
import { useEffect, useRef } from "react";

const Asos = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            containerRef.current.classList.remove("fade");
            window.scrollTo(0, 0);
        }, 1000);
    }, []);

    return (
        <div className="project-page-container fade" ref={containerRef}>
            <div className="products-padding">
                <div className="pp-hero ">
                    <div className="pp-hero-top">
                        <p className="breadcrumb">PROJECTS/</p>
                        <h1 className="pp-title">ASOS REDESIGN</h1>
                    </div>
                    <div className="pp-hero-bottom">
                        <div className="pp-overview-container">
                            <p className="hero-bottom-title">
                                PROJECT OVERVIEW
                            </p>
                            <p className="project-overview-text">
                                I redesigned internationally renowned clothing
                                brand ASOS's website
                            </p>
                        </div>
                        <div className="pp-service-container">
                            <p className="hero-bottom-title">SERVICES</p>
                            <p className="project-item-text">UX & UI Design</p>
                            <p className="project-item-text">Digital Design</p>
                        </div>
                        <div className="pp-info-container">
                            <div className="pp-info">
                                <p className="hero-bottom-title">DATE</p>
                                <p className="project-item-text">Feb 2023</p>
                            </div>
                            <div className="pp-info">
                                <p className="hero-bottom-title">CLIENT</p>
                                <p className="project-item-text">ASOS (Mock)</p>
                            </div>
                            <div className="pp-info">
                                <p className="hero-bottom-title">LOCATION</p>
                                <p className="project-item-text">USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={homedisplay} alt="" className="pp-img-full" />

            <div className="products-padding">
                <div className="pp-body">
                    {/* <p className="pp-heading1">HOME PAGE</p> */}
                    <div className="sticky-two-col">
                        <div className="sticky-left-side">
                            <div className="sticky-container">
                                <p className="pp-heading2">
                                CURRENT HOME PAGE
                                </p>
                            </div>
                        </div>
                        <div className="sticky-right-side">
                            <img
                                src={beforehero}
                                alt=""
                                className="browser-inner"
                            />
                            {/* <img src={afterhero} alt="" className="pp-img-full" /> */}
                        </div>
                    </div>
                    <div className="sticky-two-col">
                        <div className="sticky-left-side">
                            <div className="sticky-container">
                                <p className="pp-heading2">
                                    REDESIGNED HOME PAGE
                                </p>
                            </div>
                        </div>
                        <div className="sticky-right-side">
                            <img
                                src={homeredesign}
                                alt=""
                                className="browser-inner"
                            />
                            {/* <img src={afterhero} alt="" className="pp-img-full" /> */}
                        </div>
                    </div>
                </div>
            </div>

            <img src={productsdisplay} alt="" className="pp-img-full" />

            <div className="products-padding">
                <div className="pp-body">
                    <div className="sticky-two-col reverse">
                        <div className="sticky-left-side">
                            <div className="sticky-container">
                                <p className="pp-heading2">
                                    CURRENT PRODUCTS PAGE
                                </p>
                            </div>
                        </div>
                        <div className="sticky-right-side">
                            <img
                                src={beforebrowse}
                                alt=""
                                className="browser-inner"
                            />
                            {/* <img src={afterhero} alt="" className="pp-img-full" /> */}
                        </div>
                    </div>
                    <div className="sticky-two-col reverse">
                        <div className="sticky-left-side">
                            <div className="sticky-container">
                                <p className="pp-heading2">
                                    REDESIGNED PRODUCTS PAGE
                                </p>
                            </div>
                        </div>
                        <div className="sticky-right-side">
                            <img
                                src={browserdesign}
                                alt=""
                                className="browser-inner"
                            />
                            {/* <img src={afterhero} alt="" className="pp-img-full" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Asos;
