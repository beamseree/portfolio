import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/contact.css";

const Contact = (props) => {
    const [isFading, setIsFading] = useState(true);
    const cardRef = useRef(null);

    const navigate = useNavigate();
    // const goBack = () => {
    //     navigate(-1);
    // }

    // if (!props.didEnter) {
    //   navigate('/')
    // }

    useEffect(() => {
        props.setYaw(70);
        setTimeout(() => {
          setIsFading(false);
        }, 700);

        cardRef.current.addEventListener("mousemove", (e) => {
          const x = e.offsetX;
          const y = e.offsetY;
          const { width, height } = cardRef.current.getBoundingClientRect();
          const halfWidth = width / 2;
          const halfHeight = height / 2;
          const rotateY = ((x - halfWidth) / halfWidth) * 10;
          const rotateX = ((y - halfHeight) / halfHeight) * -10;
          cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      cardRef.current.addEventListener("mouseleave", () => {
        cardRef.current.style.transform = `rotate(0deg)`;
      });

        return () => {
            setIsFading(true);
        }
    }, []);

    return (
        <div className={`main-container preserve ${isFading && "fade"}`}>
            {/* <div className={loader}></div> */}
            <div className="contact-container">
                <div className="contact-content" ref={cardRef}>
                    <div className="contact-left">
                        <div className="contact-left-top">
                            <p className="hello">SAY HELLO</p>
                        </div>
                        <div className="contact-left-bottom">
                            <p className="look-forward">
                                I LOOK FORWARD TO HEARING FROM YOU
                            </p>
                        </div>
                    </div>
                    <div className="contact-right">
                        <div className="contact-right-top">
                            <p className="contact-title">CONTACT INFO:</p>
                        </div>
                        <div className="contact-right-bottom">
                            <p className="contact-info">beamseree@gmail.com</p>
                            <p className="contact-info">617 763 3316</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow"></div>
        </div>
    );
};

export default Contact;
