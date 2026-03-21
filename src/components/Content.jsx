import React, { useState, useRef } from "react";
import portraitImage from "../assets/portrait.png";
import SkillsInfo from "./ContentSections/SkillsInfo";
import Languages from "./Languages";
import { LinkedInIcon, GitHubIcon, LocationIcon } from "../assets/SvgIcons";

function Content() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Ref für das sanfte Scrollen zu den Projekten
  const projectsRef = useRef(null);

  const scrollToProjects = (e) => {
    e.preventDefault();
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch overflow-visible">
        {/* KARTE 1: PORTRAIT & INFO (Unverändert) */}
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

              <div className="w-full mt-auto pt-3 border-t-2 border-gray-300 flex flex-nowrap items-center justify-between overflow-visible">
                {/* Icons ... (wie im vorigen Code) */}
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
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === "location" ? null : "location",
                    )
                  }
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
          <div className="space-y-8">
            {/* Master Sektion */}
            <section>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
                Aktuelles Studium
              </h4>
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-2xl font-bold text-gray-900">
                    Master of Science
                  </h5>
                  <p className="text-gray-600 font-medium">
                    Hochschule Albstadt-Sigmaringen
                  </p>
                </div>
                <span className="text-sm font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  Seit 2024
                </span>
              </div>
            </section>

            {/* Bachelor Sektion */}
            <section>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                Abschluss
              </h4>
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-2xl font-bold text-gray-900">
                    B.Sc.{" "}
                    <a
                      href="https://www.hs-heilbronn.de/de/mobile-computing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline decoration-2 underline-offset-4"
                    >
                      Mobile Computing
                    </a>
                  </h5>
                  <p className="text-gray-600 font-medium">
                    Hochschule Heilbronn
                  </p>
                </div>
                <span className="text-sm font-mono bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  2020 - 2024
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Während meines Studiums konnte ich bereits wertvolle
                Praxiserfahrung als{" "}
                <strong>Werkstudent in der IT-Administration</strong> sammeln.
                Dort war ich maßgeblich an der Implementierung und
                anforderungsspezifischen Weiterentwicklung eines ERP-Systems
                beteiligt.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600 italic">
              Einige meiner{" "}
              <a
                href="#projekte"
                onClick={scrollToProjects}
                className="text-gray-900 font-bold hover:text-blue-600 underline decoration-blue-500 decoration-2 underline-offset-4 transition-colors"
              >
                Projekte aus dem Studium
              </a>{" "}
              kannst du weiter unten einsehen.
            </p>
          </div>
        </div>
      </div>

      {/* NEUE REIHE: MEINE PROJEKTE */}
      <div ref={projectsRef} id="projekte" className="scroll-mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight">
              Meine Projekte
            </h3>
            <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bachelor Thesis - Ersetzt das Security Tool */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-all group flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-4 block">🎓</span>
                <h5 className="font-bold text-lg mb-2">Bachelor Thesis</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Methodenevaluierung des <strong>maschinellen Lernens</strong>{" "}
                  für Prognosemodelle in der Materialwirtschaft – entstanden im
                  Studiengang Angewandte Informatik in Kooperation mit dem{" "}
                  <strong>MOLIT-Institut Heilbronn</strong>.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider group-hover:underline">
                  Details folgen bald →
                </span>
              </div>
            </div>

            {/* Projekt Name 1 (z.B. Mobile Computing App) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-colors group">
              <span className="text-2xl mb-4 block">📱</span>
              <h5 className="font-bold text-lg mb-2">Mobile Application</h5>
              <p className="text-sm text-gray-600">
                Entwicklung nativer und hybrider Anwendungen im Rahmen des
                Mobile Computing Studiums an der HS Heilbronn.
              </p>
            </div>

            {/* ERP Integration */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-colors group">
              <span className="text-2xl mb-4 block">⚙️</span>
              <h5 className="font-bold text-lg mb-2">
                ERP-System & Administration
              </h5>
              <p className="text-sm text-gray-600">
                Implementierung und individuelle Anpassung eines ERP-Systems
                während meiner Zeit als Werkstudent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UNTERE REIHE (Bestehend) */}
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
