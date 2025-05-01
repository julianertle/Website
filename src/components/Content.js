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
                // Get the width of the image
                const imageWidth = imageElement.offsetWidth;
    
                // Set the width as a CSS variable
                document.documentElement.style.setProperty('--julian-portrait-width', `${imageWidth}px`);
            }
        }
    }, []);
    

    return (

        <>

            <div class="center-div container">
            <div class="split-space-horizontal">
                <div class="animated-image">
                <a href="/about">
                    <img src={portraitImage} className="portrait-style center-horizontal grow" alt="Portrait" />
                </a>
                </div>
            </div>
            {/* <ContentInfo /> */}
            <div className="vertical-stack">
                <ContentInfo />
                <div className="relative">
                <SkillsInfo /> 
                </div>
            </div>
            </div>


            <div class="center-vertical box grow split-space-horizontal">

                <p>

                </p>
                <p>
                    Java
                </p>
                <AnimatedProgressBar value={25} color="green" offset={800} duration={1500} />
                <p>
                    Kotlin
                </p>
                <AnimatedProgressBar value={50} color="DeepSkyBlue" offset={1000} duration={1500} />

                <p>
                    Python
                </p>
                <AnimatedProgressBar value={75} color="Orange" offset={1200} duration={1500} />
                <p>
                    C
                </p>
                <AnimatedProgressBar value={100} color="FireBrick " offset={1400} duration={1500} />


                <div class="flex">
                    <div class="color align-bottom">
                        <a href="https://github.com/julianertle" target="_blank" id="hyperlink" rel="noreferrer" color="black">
                            <table class="grow">
                                <tr>
                                    <td>
                                        <h5 class="center-vertical">
                                            Github:&nbsp;
                                        </h5>
                                    </td>
                                    <td>
                                        <img src={githubImage} alt="Github" />
                                    </td>
                                </tr>
                            </table>
                        </a>
                        <a class="custom-tooltip" href="https://www.flaticon.com/free-icons/cat" id="hyperlink" target="_blank" rel="noreferrer">
                            <span>
                                ⓘ
                            </span>
                            <span class="tooltip-text">Cat icons created by Dave Gandy - Flaticon</span>
                        </a>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Content;