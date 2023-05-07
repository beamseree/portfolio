/* eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./project-scroll.css";
import click from "../sounds/clicky.mp3";
import wooshSound from "../sounds/woosh.mp3";

gsap.registerPlugin(ScrollTrigger);

const ProjectScroll = (props) => {
  const soundOnRef = useRef(props.soundOn);
  const [currentItem, setCurrentItem] = useState(0);

  const currentItemRef = useRef(currentItem);

  var whoosh = new Audio(wooshSound);
  whoosh.volume = 0.1;


  useEffect(() => {
    console.log(currentItemRef.current)
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    currentItemRef.current = currentItem;
  }, [currentItem]);

  useEffect(() => {
    soundOnRef.current = props.soundOn;
  }, [props.soundOn]);

  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    // Clear the timeout if it's still pending
    if (window.scrollTimeout) clearTimeout(window.scrollTimeout);

    // Set isScrolling to true
    setIsScrolling(true);
    stopScrollHandler();

    // Set a timeout to detect when the scrolling has stopped
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      scrollToItem(currentItemRef.current)
      setTimeout(() => {
        for (let i = 0; i < textRefs.current.length; i++) {
          if (!textRefs.current[i] && !textRefs.current[i].classList) {return;}
          if (i != currentItemRef.current) {
            textRefs.current[i].classList.add('hidden')
            props.hideColor();
            whoosh.play()
          } else {
            setTimeout(() => {
              props.setIsChoosing(false);
              
              const tempYaw = ((70/textRefs.current.length))
              props.setYaw(230+(tempYaw*i))
              textRefs.current[i].classList.add('selected')
            }, 145);
          }
        }
      }, 400);
    }, 500); // 100ms delay
  };

  const stopScrollHandler = () => {
    for (let i = 0; i < textRefs.current.length; i++) {
      if (!textRefs.current[i] && !textRefs.current[i].classList) {return;}
      if (i != currentItemRef.current) {
        textRefs.current[i].classList.remove('hidden')
        textRefs.current[i].classList.remove('selected')
      }
    }
    props.showColor();
    props.setIsChoosing(true);
    
  }

  useEffect(() => {

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textRefs = useRef([]);

  // Animate text color and play sound on entering the middle of the screen
  const onEnterText = (index) => {
    const audio = new Audio(click);
    audio.volume = 0.1;
    // soundOnRef.current && audio.play();
    audio.play();
    gsap.to(textRefs.current[index], {
      color: "white",
      duration: 0,
      opacity: 1,
      fontFamily: "NeueMontreal-R",
    });
    const currentTemp = textRefs.current[index].innerHTML.split(">")[2];
    setCurrentItem(index);
    props.setCurrentProject(index)
    // props.onEnter(currentTemp)
  };

  // Set up the scroll triggers
  useEffect(() => {
    // document.addEventListener('keydown', enterPress, true)

    textRefs.current = textRefs.current.slice(0, props.textItems.length);

    props.textItems.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: textRefs.current[index],
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => onEnterText(index),
        onEnterBack: () => onEnterText(index),
        onLeave: () =>
          gsap.to(textRefs.current[index], {
            color: "white",
            duration: 0,
            opacity: 0.5,
            fontFamily: "NeueMontreal-L",
          }),
        onLeaveBack: () =>
          gsap.to(textRefs.current[index], {
            color: "white",
            duration: 0,
            opacity: 0.5,
            fontFamily: "NeueMontreal-L",
          }),
        //   markers: true, // Remove this line if you don't want to see the markers
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [textRefs.current]);

  const scrollToItem = (index) => {
    if (textRefs.current[index]) {
      textRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  //   useEffect(() => {
  //     scrollToItem(props.scrollTo)
  //     props.setScrollTo(-1)
  //   }, [props.scrollTo]);

  //   const clickHandler = (index) => {
  //     if (textRefs.current[index]) {
  //       const tempTest = textRefs.current[index].innerHTML.split('>')[2]
  //       scrollToItem(index)
  //       props.setGoTo(tempTest)

  //     }
  //   }

  //   // useEffect(() => {
  //   //   console.log(currentItem)
  //   // }, [currentItem])

  //   const enterPress = (e) => {
  //     if (e.key === "Enter" || e.key === " ") {
  //       e.preventDefault();
  //       if(currentItemRef.current >= 0 && currentItemRef.current <= 2) {
  //         clickHandler(currentItemRef.current)
  //       }
  //     }
  //   }

  return (
    <div className="proj-container">
      {/* <button onClick={() => {scrollToItem(currentItemRef.current + 1)}}>NEXT</button> */}
      {props.textItems.map((item, index) => (
        <div
          tabIndex="-1"
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className={`proj-textItem ${index != 0 && "hidden"} ${index == 0 && "selected"}`}
        >
          {/* <button tabIndex="-1" className='goTo' onClick={() => clickHandler(index)}> */}
          {/* </button> */}
          {item}
        </div>
      ))}
    </div>
  );
};

export default ProjectScroll;
