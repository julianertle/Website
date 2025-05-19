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
                <div className="split-space-horizontal mt-3">
                    <div className="animated-image">
                        <a href="/about">
                            <img src={portraitImage} className="portrait-style center-horizontal grow" alt="Portrait" />
                        </a>
                    </div>
                </div>
                <div className="vertical-stack">
                    <div className="relative skills-container mb-10">
                        <ContentInfo />

                    </div>
                    <div className="relative skills-container ">
                        <SkillsInfo />
                    </div>
                    
                </div>
                
                
            </div>
            <div className="max-w-[80%] min-w-[380px] mx-auto mt-10">
                <div className="p-6 bg-white rounded-lg shadow-md text-gray-800">
                    <Languages />
                </div>
            </div>

        </>
    );
}

export default Content;