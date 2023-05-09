import "../../style/projectpage.css";
import { useEffect, useRef } from "react";

import display from "./holiday-display.png";
import before from "./before.png";
import after from "./after.png";

const HolidayInn = () => {
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
                            <h1 className="pp-title">HOLIDAY INN REDESIGN</h1>
                        </div>
                        <div className="pp-hero-bottom">
                            <div className="pp-overview-container">
                                <p className="hero-bottom-title">
                                    PROJECT OVERVIEW
                                </p>
                                <p className="project-overview-text">
                                    I performed an accessibility audit and
                                    redesigned the Holiday Inn website
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
                                        Website Design
                                    </p>
                                </div>
                            </div>
                            <div className="pp-info-container">
                                <div className="pp-info">
                                    <p className="hero-bottom-title">DATE</p>
                                    <p className="project-item-text">
                                        May 2023
                                    </p>
                                </div>
                                <div className="pp-info">
                                    <p className="hero-bottom-title">CLIENT</p>
                                    <p className="project-item-text">
                                        Holiday Inn (Mock)
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
                        <p className="pp-heading1">ACCESSIBILITY AUDIT</p>
                        <div className="pp-body-text-container">
                            <p className="pp-body-text">
                                The first accessibility problem I found was that
                                the text size for each hotel’s information is
                                too small. I started by enlarging the hotel info
                                font, and to maintain the size of each card, I
                                removed the front desk and reservation phone
                                numbers from each hotel card. Instead, I’ll make
                                an icon where hovering it will show the phone
                                numbers instead. This is because when a user is
                                browsing the hotels, they do not necessarily
                                have to see the phone numbers of every hotel; it
                                is only when they are interested.{" "}
                            </p>
                            <p className="pp-body-text">
                                The second problem I found is that the image of
                                each hotel uses background-image CSS rule
                                instead of an img tag in HTML. The problem of
                                using background-image rule on a div is that
                                there will not be an alternative tag for the
                                image.
                            </p>
                            <p className="pp-body-text">
                                Thirdly, I found the the button “SELECT HOTEL”
                                is a bit vague. Initially, I had no idea what
                                the button actually does; I had to click it to
                                find out wha it does. So instead, I changed the
                                button text to “SEE ROOMS,” so the user will
                                know that the button will lead them to a page
                                with the hotel’s rooms.
                            </p>
                            <p className="pp-body-text">
                                Lastly, this is minor, but the text with “25
                                Hotels Found” has inconsistent vertical margins,
                                so I adjusted the margins to be consistent. I
                                also changed the margins of the filter to equal
                                the margin of the adjusted text with “25 Hotels
                                Found” margin.
                            </p>
                        </div>
                        <div className="sticky-two-col">
                            <div className="sticky-left-side">
                                <div className="sticky-container">
                                    <p className="pp-heading2">BEFORE</p>
                                </div>
                            </div>
                            <div className="sticky-right-side">
                                <img
                                    src={before}
                                    alt=""
                                    className="browser-inner"
                                />
                                {/* <img src={afterhero} alt="" className="pp-img-full" /> */}
                            </div>
                        </div>
                        <div className="sticky-two-col">
                            <div className="sticky-left-side">
                                <div className="sticky-container">
                                    <p className="pp-heading2">AFTER</p>
                                </div>
                            </div>
                            <div className="sticky-right-side">
                                <img
                                    src={after}
                                    alt=""
                                    className="browser-inner"
                                />
                                {/* <img src={afterhero} alt="" className="pp-img-full" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="products-padding">
                    <div className="pp-body">
                        <p className="pp-heading1">SHOWCASE</p>
                        <video src={jumbo} muted loop autoPlay className="pp-img-full mock" />
                        <img src={overlay} alt="" className="overlay" />
                        </div>
                </div> */}
            </div>
        </div>
    );
};

export default HolidayInn;
