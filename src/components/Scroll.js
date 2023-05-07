import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './scroll.css';
import click from '../sounds/clicky.mp3'


gsap.registerPlugin(ScrollTrigger);

const Scroll = (props) => {
    const soundOnRef = useRef(props.soundOn);
    const [currentItem, setCurrentItem] = useState(-1)

    const currentItemRef = useRef(currentItem);

  useEffect(() => {
    currentItemRef.current = currentItem;
  }, [currentItem]);

  useEffect(() => {
    soundOnRef.current = props.soundOn;
  }, [props.soundOn]);

    const textRefs = useRef([]);
  
    // Animate text color and play sound on entering the middle of the screen
    const onEnterText = (index) => {
      const audio = new Audio(click);
      audio.volume = 0.1;
      soundOnRef.current && audio.play();
      gsap.to(textRefs.current[index], { color: 'white', duration: 0, opacity: 1,fontFamily: 'NeueMontreal-R' });
      const currentTemp = textRefs.current[index].innerHTML.split('>')[2]
      setCurrentItem(index)
      props.onEnter(currentTemp)
    };
  
    // Set up the scroll triggers
    useEffect(() => {

      document.addEventListener('keydown', enterPress, true)

      textRefs.current = textRefs.current.slice(0, props.textItems.length);
  
      props.textItems.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: textRefs.current[index],
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => onEnterText(index),
          onEnterBack: () => onEnterText(index),
          onLeave: () => gsap.to(textRefs.current[index], { color: 'white', duration: 0, opacity: 0.5, fontFamily: 'NeueMontreal-L' }),
          onLeaveBack: () => gsap.to(textRefs.current[index], { color: 'white', duration: 0, opacity: 0.5, fontFamily: 'NeueMontreal-L' }),
        //   markers: true, // Remove this line if you don't want to see the markers
        });
      });
      
  
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);

    const scrollToItem = (index) => {
        if (textRefs.current[index]) {
          textRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      };      

      useEffect(() => {
        scrollToItem(props.scrollTo)
        props.setScrollTo(-1)
      }, [props.scrollTo]);

      const clickHandler = (index) => {
        if (textRefs.current[index]) {
          const tempTest = textRefs.current[index].innerHTML.split('>')[2]
          scrollToItem(index)
          props.setGoTo(tempTest)
          
        }
      }

      // useEffect(() => {
      //   console.log(currentItem)
      // }, [currentItem])

      const enterPress = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if(currentItemRef.current >= 0 && currentItemRef.current <= 2) {
            clickHandler(currentItemRef.current)
          }
        }
      }
  
    return (
        <div className="container">
        {props.textItems.map((item, index) => (
          <div tabIndex="-1" key={index} ref={(el) => (textRefs.current[index] = el)} className="textItem">
            <button tabIndex="-1" className='goTo' onClick={() => clickHandler(index)}>
            </button>
            {item}
          </div>
        ))}
      </div>
    );
  };
  
  export default Scroll;
