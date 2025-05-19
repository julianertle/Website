import React, { useEffect } from "react";
import './styles.css';
import portraitImage from '../assets/portrait.png';
import githubImage from '../assets/github-logo.png';
import AnimatedProgressBar from "./AnimatedProgressBar";
import ContentInfo from './ContentSections/ContentInfo';
import SkillsInfo from './ContentSections/SkillsInfo';

function Content() {
    useEffect(() => {
        const imageElement = document.querySelector('.portrait-style');
        if (imageElement) {
            imageElement.onload = () => {
                const imageWidth = imageElement.offsetWidth;
                document.documentElement.style.setProperty('--julian-portrait-width', `${imageWidth}px`);
            };
        }
    }, []);

    return (
        <>
            <div className="center-div container">
                <div className="split-space-horizontal">
                    <div className="animated-image">
                        <a href="/about">
                            <img src={portraitImage} className="portrait-style center-horizontal grow" alt="Portrait" />
                        </a>
                    </div>
                </div>
                <div className="vertical-stack">
                    <ContentInfo />
                    <div className="relative skills-container ">
                        <SkillsInfo />
                    </div>
                </div>
            </div>

            <div className="center-vertical box grow split-space-horizontal">
                <p>Java</p>
                <AnimatedProgressBar value={25} color="green" offset={800} duration={1500} />
                <p>Kotlin</p>
                <AnimatedProgressBar value={50} color="DeepSkyBlue" offset={1000} duration={1500} />
                <p>Python</p>
                <AnimatedProgressBar value={75} color="Orange" offset={1200} duration={1500} />
                <p>C</p>
                <AnimatedProgressBar value={100} color="FireBrick" offset={1400} duration={1500} />

                <div className="flex">
                    <div className="color align-bottom">
                        <a href="https://github.com/julianertle" target="_blank" id="hyperlink" rel="noreferrer" style={{ color: 'black' }}>
                            <table className="grow">
                                <tr>
                                    <td>
                                        <h5 className="center-vertical">Github: </h5>
                                    </td>
                                    <td>
                                        <img src={githubImage} alt="Github" />
                                    </td>
                                </tr>
                            </table>
                        </a>
                        <a className="custom-tooltip" href="https://www.flaticon.com/free-icons/cat" id="hyperlink" target="_blank" rel="noreferrer">
                            <span>ⓘ</span>
                            <span className="tooltip-text">Cat icons created by Dave Gandy - Flaticon</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;