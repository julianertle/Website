import React, { useState, useRef } from "react";
import portraitImage from "../assets/portrait.png";
import SkillsInfo from "./ContentSections/SkillsInfo";
import Languages from "./Languages";
import { LinkedInIcon, GitHubIcon, LocationIcon } from "../assets/SvgIcons";

function Content() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const projectsRef = useRef(null);

  const scrollToProjects = (e) => {
    e.preventDefault();
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch overflow-visible">
        {/* KARTE 1: PORTRAIT & INFO */}
        <div className="rounded-3xl shadow-lg bg-white overflow-visible transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col lg:flex-row h-full overflow-visible">
            <div className="w-full lg:w-3/5 h-auto lg:h-full relative group overflow-visible">
              <a href="/about" className="block w-full h-full">
                <img
                  src={portraitImage}
                  className="w-auto mx-auto object-contain rounded-t-3xl transition-transform duration-500 group-hover:scale-105 max-h-[300px] sm:max-h-[500px] lg:w-full lg:h-full lg:max-h-none lg:object-cover lg:rounded-l-3xl lg:rounded-tr-none lg:mx-0"
                  alt="Portrait"
                />
              </a>
            </div>

            <div className="lg:w-1/2 flex flex-col p-6 lg:p-12 lg:pl-16 text-center lg:text-left pt-10 lg:pt-20 rounded-b-3xl lg:rounded-r-3xl overflow-visible">
              <div className="flex-grow flex flex-col justify-center mb-6 lg:mb-0">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-950 tracking-tight leading-tight mb-4 lg:mb-8">
                  Hey, I'm Julian.
                </h3>
                <p className="text-lg lg:text-xl font-mono text-gray-950 font-bold uppercase tracking-[0.1em] leading-tight">
                  IT Security Student & Developer
                </p>
              </div>

              {/* Icon Leiste */}
              <div className="w-full mt-auto pt-3 border-t-2 border-gray-300 flex flex-nowrap items-center justify-between overflow-visible">
                <div
                  className="relative flex flex-col items-center flex-shrink-0"
                  onMouseEnter={() => setActiveTooltip("linkedin")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div
                    className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 ${activeTooltip === "linkedin" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                      LinkedIn Profil
                    </div>
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

                <div
                  className="relative flex flex-col items-center flex-shrink-0"
                  onMouseEnter={() => setActiveTooltip("github")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div
                    className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 ${activeTooltip === "github" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                      GitHub Profil
                    </div>
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

                <div
                  className="relative flex flex-col items-center cursor-pointer flex-shrink-0 z-20"
                  onMouseEnter={() => setActiveTooltip("location")}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div
                    className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 ${activeTooltip === "location" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                      Allgäu, Germany
                    </div>
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

        {/* KARTE 2: EDUCATION & EXPERIENCE */}
        <div className="rounded-3xl shadow-lg bg-white p-8 lg:p-12 flex flex-col justify-between transition-all duration-300 hover:shadow-xl border border-gray-100">
          <div className="space-y-10">
            {/* Master Sektion */}
            <section className="relative pl-6 border-l-4 border-blue-500">
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">
                Aktuelles Studium
              </h4>
              <div className="flex flex-col">
                <h5 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Advanced IT Security
                </h5>
                <div className="flex items-center gap-2 mt-2 text-gray-600 font-medium text-lg">
                  <LocationIcon className="w-4 h-4 text-blue-500" />
                  <span>Hochschule Albstadt-Sigmaringen</span>
                </div>
              </div>
            </section>

            {/* Bachelor Sektion */}
            <section className="relative pl-6 border-l-4 border-gray-200">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                Hochschulabschluss
              </h4>
              <div className="flex flex-col">
                <h5 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Angewandte Informatik <br className="hidden sm:block" />
                  <span className="text-gray-500 text-xl font-medium">
                    Schwerpunkt{" "}
                  </span>
                  <a
                    href="https://www.hs-heilbronn.de/de/mobile-computing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline decoration-2 underline-offset-4 text-xl"
                  >
                    Mobile Computing
                  </a>
                </h5>
                <div className="flex items-center gap-2 mt-2 text-gray-600 font-medium text-lg">
                  <LocationIcon className="w-4 h-4 text-blue-500" />
                  <span>Hochschule Heilbronn</span>
                </div>
              </div>
            </section>

            {/* Work & Travel Sektion */}
            <section className="relative pl-6 border-l-4 border-gray-200">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                Work and Travel
              </h4>
              <div className="flex flex-col">
                <h5 className="text-2xl font-bold text-gray-900">
                  Auslandsaufenthalt Kanada
                </h5>
                <div className="flex items-center gap-2 mt-1 text-gray-600 font-medium text-lg">
                  <LocationIcon className="w-4 h-4 text-red-500" />
                  <span>Vancouver & Banff</span>
                </div>
              </div>
            </section>
          </div>

          {/* Trenner und Projekt-Link */}
          <div className="mt-12 pt-6 border-t border-gray-100">
            <p className="text-gray-500 flex items-center gap-2">
              <span>🚀</span>
              <span className="italic text-sm sm:text-base">
                Einblicke in meine{" "}
                <a
                  href="#projekte"
                  onClick={scrollToProjects}
                  className="text-gray-900 font-bold hover:text-blue-600 underline decoration-blue-500 decoration-2 underline-offset-4 transition-colors"
                >
                  akademischen Projekte
                </a>{" "}
                findest du hier.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* PROJEKT REIHE */}
      <div ref={projectsRef} id="projekte" className="scroll-mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight">
              Projekte & Thesis
            </h3>
            <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bachelor Thesis Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-all group flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎓</span>
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-bold text-lg">Bachelor Thesis</h5>
                  <span className="text-[10px] font-black bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md">
                    Note: 1,7
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-1">
                  Methodenevaluierung des maschinellen Lernens für
                  Prognosemodelle in der Materialwirtschaft
                </p>
                <p className="text-xs text-gray-500 mb-4 italic">
                  In Kooperation mit dem{" "}
                  <a
                    href="https://www.molit.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    MOLIT Institut
                  </a>
                  .
                </p>
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                Dokumentation in Vorbereitung
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-colors group">
              <span className="text-2xl mb-4 block">📱</span>
              <h5 className="font-bold text-lg mb-2">Mobile Application</h5>
              <p className="text-sm text-gray-600">
                Entwicklung diverser Prototypen im Rahmen des Schwerpunkts
                Mobile Computing an der Hochschule Heilbronn.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-colors group">
              <span className="text-2xl mb-4 block">⚙️</span>
              <h5 className="font-bold text-lg mb-2">ERP-System Integration</h5>
              <p className="text-sm text-gray-600">
                Anpassung und Rollout eines ERP-Systems zur Optimierung
                betrieblicher Abläufe in der IT-Administration.
              </p>
            </div>
          </div>
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
              Mein Fokus liegt auf der Spezialisierung in{" "}
              <strong>Advanced IT Security</strong>. Ich vertiefe meine
              Kenntnisse in Netzwerksicherheit und sicheren Systemarchitekturen.
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
