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
                    <AnimatedProgressBar value={25} color="green" duration={2000}/>

                    <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-success" style={{ width: '25%' }}>25%</div>
                    </div>
                    <p>
                        Test
                    </p>
                    <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-info text-dark" style={{ width: '50%' }}>50%</div>
                    </div>
                    <p>
                        Test
                    </p>
                    <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-warning text-dark" style={{ width: '75%' }}>75%</div>
                    </div>
                    <p>
                        Test
                    </p>
                    <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                        <div className="progress-bar bg-danger" style={{ width: '100%' }}>100%</div>
                    </div>


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