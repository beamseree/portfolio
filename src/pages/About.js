import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/about.css";

const About = (props) => {
    const [isFading, setIsFading] = useState(true);

    const navigate = useNavigate();
    // const goBack = () => {
    //     navigate(-1);
    // }

    // if (!props.didEnter) {
    //   navigate('/')
    // }

    useEffect(() => {
        props.setYaw(348);
        setTimeout(() => {
          setIsFading(false);
        }, 700);
    }, []);

    return (
        <div className={`main-container auto ${isFading && "fade"}`}>
            <div className="about-container">
                <div className="about-content">
                    <p className="about-header">Hello 👋</p>
                    <h1 className="about-header">I’m Beam Sereeyothin 🇹🇭</h1>

                    <div className="about-line"></div>

                    <p className="about-text">
                        I’m a designer and developer based in Bangkok. I help
                        startups to grow their digital presence by integrating
                        unique, creative design with strategic storytelling and
                        brand creation.
                    </p>

                    <p className="about-text">
                        As an designer, I recognize the power of design as a
                        tool for communication, and its ability to transcend
                        language barriers. My unique and creative design
                        approach is deeply rooted in understanding the core
                        values and stories of the brands I work with. By
                        crafting these stories visually, I create compelling
                        narratives that resonate with the target audience,
                        fostering a strong connection between the brand and its
                        consumers.
                    </p>

                    <p className="about-text">
                        In addition to design, my passion for technology has led
                        me to develop the technical skills required to turn
                        these visual concepts into digital reality. This
                        seamless integration of design and development ensures
                        that the creative process is not hindered by technical
                        limitations, allowing for a final product that embodies
                        both form and function.
                    </p>

                    <p className="about-text">
                        My ultimate goal is to empower startups and help them
                        grow by creating cohesive and memorable brand
                        identities, utilizing a combination of strategic
                        storytelling, creative design, and cutting-edge
                        technology. Through this unique fusion of art and
                        technology, I aim to inspire others and make a positive
                        impact on the world around me.
                    </p>

                </div>
            </div>
            {/* <div className={loader}></div> */}
        </div>
    );
};

export default About;
