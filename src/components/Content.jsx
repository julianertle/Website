import React, { useEffect } from "react";
import './styles.css';
import portraitImage from '../assets/portrait.png';
import ContentInfo from './ContentSections/ContentInfo';
import SkillsInfo from './ContentSections/SkillsInfo';
import Languages from "./Languages";

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
                    <div className="w-full">
                        <Languages />
                    </div>
                </div>
                
            </div>
            
        </>
    );
}

export default Content;