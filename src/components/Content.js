import React from "react";
import './styles.css';
import portraitImage from '../assets/portrait.png';
import githubImage from '../assets/github-logo.png';
import AnimatedProgressBar from "./AnimatedProgressBar";


function Content() {
    return (
        <>

            <div class="center-div container">
                <div class="box">
                    <img src={portraitImage} className="portrait-style center-horizontal animated-image" alt="Portrait" />

                </div>

                <div class="center-vertical box">
                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={25} color="green" duration={1000} />
                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={50} color="DeepSkyBlue" duration={1500} />

                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={75} color="Orange" duration={2000} />
                    <p>
                        Test
                    </p>
                    <AnimatedProgressBar value={100} color="FireBrick " duration={2500} />


                    <div class="flex">
                        <div class="color align-bottom">
                            <a href="https://github.com/julianertle" target="_blank" id="hyperlink" rel="noreferrer" color="black">
                                <table>
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
                                <span class=" color-div">
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