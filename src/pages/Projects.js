import React, { useRef, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { useFetcher, useNavigate } from "react-router-dom";

import "../style/projects.css";
import "../style/global.css";
import bnw from "../images/room2.png";
import ProjectScroll from "../components/ProjectScroll";

const Projects = (props) => {
    const [isFading, setIsFading] = useState(true);
    const [isChoosing, setIsChoosing] = useState(false);

    const [currentProject, setCurrentProject] = useState(0);
    const currentProjectRef = useRef(currentProject);

    const [projectSub, setProjectSub] = useState("Projects");
    const [projectCat, setProjectCat] = useState("Website");

    useEffect(() => {
        currentProjectRef.current = currentProject;
        setProjectCat(projectCats[currentProject]);
        props.setTint({
            backgroundColor: projectColors[currentProject],
        });
    }, [currentProject]);

    props.setShowNav(false);

    const navigate = useNavigate();
    // const goBack = () => {
    //   navigate(-1);
    // };

    // if (!props.didEnter) {
    //   navigate('/')
    // }

    const [toggle, setToggle] = useState(true);

    const showColor = () => {
        const test = document.querySelectorAll(".black-tint")[0];
        test.classList.add("black");
    };
    const hideColor = () => {
        const test = document.querySelectorAll(".black-tint")[0];
        test.classList.remove("black");
    };

    const textItems = [
        "ASOS REDESIGN",
        "GIFTO",
        "JUMBO SHACK",
        "HOLIDAY INN",
        "UMA BY VEYLA",
        "PARC CAPITAL",
        "TEB",
        "SEEDLABS",
    ];

    const projectColors = [
        "#ffffff",
        "#DED2FF",
        "#D2ECFF",
        "012D72",
        "#ffffff",
        "#FFE5D2",
        "#D2D4FF",
        "#ffffff",
    ];

    const projectCats = [
        "Website",
        "Branding & Website",
        "Website",
        "Website",
        "Branding & Website",
        "Branding & Website",
        "Website",
        "Branding",
    ];

    const projectStatus = [
        "Completed",
        "Completed",
        "Completed",
        "Completed",
        "Coming Soon",
        "Coming Soon",
        "Coming Soon",
        "Coming Soon",
    ]

    const projectUrl = ["asos", "gifto", "jumboshack", "holidayinn", "", "", ""];

    const buttonRef = useRef(null);

    useEffect(() => {
        props.setYaw(262);
        props.setSideCover(false);
        props.setProjectTint(true);
        window.scrollTo(0, 0);

        setTimeout(() => {
          setIsFading(false);
        }, 700);

        buttonRef.current.addEventListener("mousemove", (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            const { width, height } = buttonRef.current.getBoundingClientRect();
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            const rotateY = ((x - halfWidth) / halfWidth) * -15;
            const rotateX = ((y - halfHeight) / halfHeight) * 15;
            buttonRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        buttonRef.current.addEventListener("mouseleave", () => {
            buttonRef.current.style.transform = `rotate(0deg)`;
        });

        return () => {
            props.setProjectTint(false);
        };
    }, []);

    const handleProject = () => {
        setIsFading(true);
        //currentProjectRef.current = currentProject;
        setTimeout(() => {
            props.setSideCover(true);
            // soundOnRef.current && whoosh.play();
            setTimeout(() => {
                navigate("/projects/" + projectUrl[currentProjectRef.current]);
            }, "1000");
        }, "200");
        // setIsFading(true);
    };

    return (
        <div className={`main-container ${isFading && "fade"}`}>
            <ProjectScroll
                textItems={textItems}
                showColor={showColor}
                hideColor={hideColor}
                setCurrentProject={setCurrentProject}
                setIsChoosing={setIsChoosing}
            />

            <div
                className={`project-info-container ${isChoosing && "choosing"}`}
            >
                <p className="project-sub">{projectSub}</p>
                <p className="project-cat">{projectCat}</p>
                {(projectStatus[currentProject] == "Coming Soon") ? (
                    <button
                    ref={buttonRef}
                    className="coming-soon"
                >
                    COMING SOON
                </button>
                ) : (
                    <button
                        ref={buttonRef}
                        className="hover"
                        onClick={() => {
                            handleProject();
                        }}
                    >
                        VIEW PROJECT
                    </button>
                )}
            </div>

            {/* <div className="scroll-container">
          <div className="nav-item">
            <p className="option">ABOUT</p>
          </div>
          <div className="nav-item">
            <p className="option">PROJECTS</p>
          </div>
          <div className="nav-item">
            <p className="option">CONTACT</p>
          </div>
        </div> */}
        </div>
    );
};

export default Projects;
