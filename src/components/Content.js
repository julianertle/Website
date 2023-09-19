import React from "react";
import './styles.css';
import portraitImage from '../assets/portrait.png';
import githubImage from '../assets/github-logo.png';
import AnimatedProgressBar from "./AnimatedProgressBar";


function Content() {
    return (

        <>

            <div class="center-div container">
                <div class=" split-space">
                    <div class="animated-image ">
                        <a href="/about">
                            <img src={portraitImage} className="portrait-style center-horizontal grow " alt="Portrait" />
                        </a>
                    </div>

                </div>

                <div class="center-vertical box grow split-space">
                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={25} color="green" offset={800} duration={1500} />
                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={50} color="DeepSkyBlue" offset={1000} duration={1500} />

                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={75} color="Orange" offset={1200} duration={1500} />
                    <p>
                        Test
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
            </div>
            <div class="center-div">
                <h2>
                    Student für Angewandte Informatik
                </h2>
                <p>
                    Für mein 6-monatiges Praktikumssemester suche ich eine
                    Vollzeitstelle im Bereich der IT-Entwicklung (Sept. 2023 - Feb.
                    2024). Ich freue mich auf die Zusammenarbeit mit Ihnen und
                    hoffentlich darauf meine ersten praktischen Erfahrungen in
                    ihrem Unternehmen sammeln zu können.
                </p>
            </div>

        </>

    );
}

export default Content;