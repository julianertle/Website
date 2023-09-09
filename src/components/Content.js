import React from "react";
import './styles.css';
import portraitImage from '../assets/portrait.png';

function Content() {
    return (
        <>
            
                <img src={portraitImage} alt="Hey this is me :)" className="portrait-style" />
                


            
            <div class="colored-div">
                <h5>
                    Student für Angewandte Informatik
                </h5>
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