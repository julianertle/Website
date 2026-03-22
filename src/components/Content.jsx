import React, { useState, useRef } from "react";
import portraitImage from "../assets/portrait.png";
import SkillsInfo from "./ContentSections/SkillsInfo";
import Languages from "./Languages";
import Typewriter from "typewriter-effect";
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
        <div className="rounded-3xl shadow-lg bg-white overflow-visible transition-all duration-300 hover:shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row h-full overflow-visible">
            {/* BILD-CONTAINER: animated-image triggert das Einblenden */}
            <div className="w-full lg:w-3/5 h-auto lg:h-full relative group overflow-visible animated-image">
              <a href="/about" className="block w-full h-full">
                <img
                  src={portraitImage}
                  /* grow triggert den Scale-Effekt aus deiner CSS */
                  className="w-auto mx-auto object-contain rounded-t-3xl transition-transform duration-500 group-hover:scale-105 grow max-h-[300px] sm:max-h-[500px] lg:w-full lg:h-full lg:max-h-none lg:object-cover lg:rounded-l-3xl lg:rounded-tr-none lg:mx-0"
                  alt="Portrait"
                />
              </a>
            </div>

            <div className="lg:w-1/2 flex flex-col p-6 lg:p-12 lg:pl-16 text-center lg:text-left pt-10 lg:pt-20 rounded-b-3xl lg:rounded-r-3xl overflow-visible">
              <div className="flex-grow flex flex-col mb-8 overflow-visible">
                <div className="flex-grow"></div>

                <h3 className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-bold antialiased">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(".")
                        .pauseFor(150)
                        .typeString(" .")
                        .pauseFor(150)
                        .typeString(" .")
                        .pauseFor(400) // Kürzere Pause vor dem Löschen
                        .deleteAll(30) // Schnelleres Löschen der Punkte
                        .pauseFor(300)
                        .typeString("Hey, ")
                        .pauseFor(600)
                        .typeString("I'm Julian.")
                        .callFunction((state) => {
                          // Blendet den Cursor am Ende der Animation aus
                          state.elements.cursor.style.display = "none";
                        })
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      cursor: "_",
                      delay: 60,
                      // Nutzt exakt die Klassen deiner Motivations-Texte
                      wrapperClassName: "text-gray-800 font-bold",
                      cursorClassName: "text-gray-800 font-bold",
                    }}
                  />
                </h3>

                <div className="flex-grow"></div>

                <p className="text-[10px] lg:text-xs text-gray-400 font-black uppercase tracking-[0.4em]">
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

        {/* KARTE 2: MOTIVATION & CONTACT */}
        <div className="rounded-3xl shadow-lg bg-white p-8 lg:p-12 flex flex-col justify-center transition-all duration-300 hover:shadow-xl border border-gray-100 overflow-visible">
          <div className="space-y-6">
            <section>
              <p className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-bold mb-3 ">
                Schön, dass du hier bist!
              </p>
              <p className="text-gray-600 mb-6">
                Wenn du mich als Person genauer kennenlernen möchtest, bist du
                hier genau richtig. Sieh dir gerne meine Projekte, meinen
                Werdegang und meine Motivation an.
              </p>
            </section>

            <section className="bg-slate-50 py-3 px-6 rounded-2xl border border-slate-100 mb-2">
              <p className="text-gray-700 leading-relaxed italic mb-3">
                "Als Developer macht mir vor allem die Softwareentwicklung Spaß.
                Gerade spezialisiere ich mich auf die IT-Sicherheit, um in
                Zukunft Unternehmen abzusichern und Anwendungen zu bauen, die
                von Grund auf resilient gegen moderne Bedrohungen sind."
              </p>
            </section>

            <section className="pt-2 overflow-visible flex flex-col">
              <p className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-bold mb-3 ">
                Interesse an einer Zusammenarbeit?
              </p>
              <p className="text-gray-600 mb-6 text-left">
                Sie möchten Ihre Systeme sicherer machen? Kontaktieren Sie mich
                gerne, ich bin schließlich auf der Suche nach einem
                langfristigen Arbeitgeber.
              </p>

              <div
                className="relative self-center overflow-visible"
                onMouseEnter={() => setActiveTooltip("contact-linkedin")}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div
                  className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-300 pointer-events-none z-30 ${activeTooltip === "contact-linkedin" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                    Auf LinkedIn kontaktieren
                  </div>
                  <div className="w-4 h-4 bg-gray-900 rotate-45 -mt-2.5"></div>
                </div>

                <a
                  href="https://linkedin.com/in/dein-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-5 py-2.5 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-md active:scale-95"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </section>
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
                  In Kooperation mit dem MOLIT Institut.
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
                betrieblicher Abläufe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS & LANGUAGES REIHE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
          <SkillsInfo />
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
          <Languages />
        </div>
        <div className="bg-gray-900 rounded-3xl shadow-lg p-8 text-gray-100 flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🛡️</span>
              <h4 className="text-2xl font-bold text-white">Cybersecurity</h4>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Mein Fokus liegt auf der Spezialisierung in{" "}
              <strong>Advanced IT Security</strong>. Ich vertiefe meine
              Kenntnisse in Netzwerksicherheit und Systemarchitekturen.
            </p>
          </div>
          <div className="mt-auto text-sm font-mono bg-gray-800 p-3 rounded-lg border border-gray-700 text-cyan-300">
            $ nmap -p 80,443 target.com
          </div>
        </div>
      </div>

      {/* WERDEGANG */}
      <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 border border-gray-100 transition-all duration-300 hover:shadow-xl overflow-visible">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight">
            Werdegang
          </h3>
          <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 overflow-visible">
          <section className="relative pl-6 border-l-4 border-blue-500">
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">
              Aktuelles Studium
            </h4>
            <h5 className="text-2xl font-bold text-gray-900 leading-tight">
              Advanced IT Security
            </h5>
            <div className="flex items-center gap-2 mt-2 text-gray-600 font-medium">
              <LocationIcon className="w-4 h-4 text-blue-500" />
              <span>Hochschule Albstadt-Sigmaringen</span>
            </div>
          </section>

          <section className="relative pl-6 border-l-4 border-gray-200 overflow-visible">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
              Bachelor of Science
            </h4>
            <div
              className="relative w-fit"
              onMouseEnter={() => setActiveTooltip("focus")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div
                className={`absolute bottom-full mb-4 left-0 flex flex-col items-start transition-all duration-300 pointer-events-none z-30 ${activeTooltip === "focus" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <div className="bg-gray-900 text-white text-[13px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
                  Schwerpunkt: Mobile Computing
                </div>
                <div className="w-4 h-4 bg-gray-900 rotate-45 -mt-2.5 ml-6"></div>
              </div>
              <a
                href="https://www.hs-heilbronn.de/de/mobile-computing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="text-2xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                  Angewandte Informatik
                </h5>
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2 text-gray-600 font-medium">
              <LocationIcon className="w-4 h-4 text-blue-500" />
              <span>Hochschule Heilbronn</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Content;
