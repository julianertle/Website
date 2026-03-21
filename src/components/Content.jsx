import React, { useState } from "react";
import portraitImage from "../assets/portrait.png";
import ContentInfo from "./ContentSections/ContentInfo";
import SkillsInfo from "./ContentSections/SkillsInfo";
import Languages from "./Languages";

// Icons als SVG-Komponenten
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="black">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="black">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg className={className} viewBox="57.249 0 298.6 413.099" fill="black">
    <path d="M206.549,0L206.549,0c-82.6,0-149.3,66.7-149.3,149.3c0,28.8,9.2,56.3,22,78.899l97.3,168.399c6.1,11,18.4,16.5,30,16.5 c11.601,0,23.3-5.5,30-16.5l97.3-168.299c12.9-22.601,22-49.601,22-78.901C355.849,66.8,289.149,0,206.549,0z M206.549,193.4 c-30,0-54.5-24.5-54.5-54.5s24.5-54.5,54.5-54.5s54.5,24.5,54.5,54.5C261.049,169,236.549,193.4,206.549,193.4z" />
  </svg>
);

function Content() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch overflow-visible">
        {/* KARTE 1: PORTRAIT & INFO */}
        <div className="rounded-3xl shadow-lg bg-white overflow-visible transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row h-full overflow-visible">
            {/* BILD-BEREICH */}
            <div className="w-full lg:w-3/5 h-auto lg:h-full relative group overflow-visible">
              <a href="/about" className="block w-full h-full">
                <img
                  src={portraitImage}
                  className="w-auto mx-auto object-contain rounded-t-3xl transition-transform duration-500 group-hover:scale-105 
                  max-h-[300px] sm:max-h-[500px] 
                  lg:w-full lg:h-full lg:max-h-none lg:object-cover lg:rounded-l-3xl lg:rounded-tr-none lg:mx-0"
                  alt="Portrait"
                />
              </a>
            </div>

            {/* TEXT-BEREICH */}
            <div className="lg:w-1/2 flex flex-col p-6 lg:p-12 lg:pl-16 text-center lg:text-left pt-10 lg:pt-20 rounded-b-3xl lg:rounded-r-3xl overflow-visible">
              <div className="flex-grow flex flex-col justify-center mb-6 lg:mb-0">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-950 tracking-tight leading-tight mb-4 lg:mb-8">
                  Hey, I'm Julian.
                </h3>
                <div className="space-y-2">
                  <p className="text-lg lg:text-xl font-mono text-gray-950 font-bold uppercase tracking-[0.1em] leading-tight">
                    IT Security Student & Developer
                  </p>
                </div>
              </div>

              {/* Icon Leiste */}
              <div className="w-full mt-auto pt-3 border-t-2 border-gray-300 flex flex-nowrap items-center justify-between overflow-visible">
                {/* LinkedIn */}
                <div
                  className="relative flex flex-col items-center flex-shrink-0"
                  onMouseEnter={() => setActiveTooltip("linkedin")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div
                    className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 
                    ${activeTooltip === "linkedin" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                      LinkedIn Profil
                    </div>
                    {/* Überlappung fix: -mt-2.5 statt -mt-2 */}
                    <div className="w-4 h-4 bg-gray-900 rotate-45 -mt-2.5"></div>
                  </div>
                  <a
                    href="https://linkedin.com/in/dein-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block transition-all duration-300 ${activeTooltip === "linkedin" ? "scale-125" : "hover:scale-110"}`}
                  >
                    <LinkedInIcon className="w-12 h-12" />
                  </a>
                </div>

                {/* GitHub */}
                <div
                  className="relative flex flex-col items-center flex-shrink-0"
                  onMouseEnter={() => setActiveTooltip("github")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div
                    className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 
                    ${activeTooltip === "github" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                      GitHub Profil
                    </div>
                    {/* Überlappung fix: -mt-2.5 statt -mt-2 */}
                    <div className="w-4 h-4 bg-gray-900 rotate-45 -mt-2.5"></div>
                  </div>
                  <a
                    href="https://github.com/julianertle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block transition-all duration-300 ${activeTooltip === "github" ? "scale-125" : "hover:scale-110"}`}
                  >
                    <GitHubIcon className="w-12 h-12" />
                  </a>
                </div>

                {/* Location Pin */}
                <div
                  className="relative flex flex-col items-center cursor-pointer flex-shrink-0 z-20"
                  onMouseEnter={() => setActiveTooltip("location")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === "location" ? null : "location",
                    )
                  }
                >
                  <div
                    className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 
                    ${activeTooltip === "location" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                      Allgäu, Germany
                    </div>
                    {/* Überlappung fix: -mt-2.5 statt -mt-2 */}
                    <div className="w-4 h-4 bg-gray-900 rotate-45 -mt-2.5"></div>
                  </div>
                  <div
                    className={`transition-all duration-300 ${activeTooltip === "location" ? "scale-125 brightness-125" : "hover:scale-110"}`}
                  >
                    <LocationIcon className="w-9 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KARTE 2: INFO */}
        <div className="h-full">
          <ContentInfo />
        </div>
      </div>

      {/* UNTERE REIHE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 transition-hover hover:shadow-md">
          <SkillsInfo />
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 transition-hover hover:shadow-md">
          <Languages />
        </div>
        <div className="bg-gray-900 rounded-3xl shadow-lg p-8 text-gray-100 flex flex-col justify-between transition-hover hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🛡️</span>
              <h4 className="text-2xl font-bold text-white">Cybersecurity</h4>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Mein Ziel ist die Spezialisierung im Bereich{" "}
              <strong>Cybersecurity</strong>. Ich fokussiere mich derzeit auf
              Netzwerksicherheit und sichere Softwarearchitekturen.
            </p>
          </div>
          <div className="mt-auto text-sm font-mono bg-gray-800 p-3 rounded-lg border border-gray-700 text-cyan-300">
            $ nmap -p 80,443 target.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
