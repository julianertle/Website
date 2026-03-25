import React, { useState, useRef } from "react";
import portraitImage from "../assets/portrait.png";
import SkillsInfo from "./ContentSections/SkillsInfo";
import Languages from "./Languages";
import Typewriter from "typewriter-effect";
import pentestPdf from "../assets/pentest_mrrobot_ctf.pdf";
import pspoBadge from "../assets/pspo.png";
import {
  LinkedInIcon,
  GitHubIcon,
  LocationIcon,
  ERPNextIcon,
} from "../assets/SvgIcons";

function Content() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const projectsRef = useRef(null);

  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:p-8 space-y-12 bg-slate-50 min-h-screen">
      {/* OBERE REIHE: PORTRAIT & MOTIVATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch overflow-visible">
        {/* KARTE 1: PORTRAIT & INFO */}
        <div className="rounded-3xl shadow-lg bg-white overflow-visible transition-all duration-300 hover:shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row h-full overflow-visible">
            <div className="w-full lg:w-3/5 h-auto lg:h-full relative group overflow-visible">
              <a href="/about" className="block w-full h-full">
                <img
                  src={portraitImage}
                  className="w-auto mx-auto object-contain rounded-t-3xl transition-transform duration-500 ease-out group-hover:scale-110 transform-gpu max-h-[300px] sm:max-h-[500px] lg:w-full lg:h-full lg:max-h-none lg:object-cover lg:rounded-l-3xl lg:rounded-tr-none lg:mx-0"
                  alt="Portrait"
                />
              </a>
            </div>

            <div className="lg:w-1/2 flex flex-col p-6 lg:p-12 lg:pl-16 text-center lg:text-left pt-10 lg:pt-20 overflow-visible">
              <div className="flex-grow flex flex-col mb-8 overflow-visible">
                <div className="flex-grow"></div>
                <h3 className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-bold antialiased">
                  <Typewriter
                    key="typewriter-headline"
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(".")
                        .pauseFor(150)
                        .typeString(" .")
                        .pauseFor(150)
                        .typeString(" .")
                        .pauseFor(400)
                        .deleteAll(30)
                        .pauseFor(300)
                        .typeString("Hey, ")
                        .pauseFor(600)
                        .typeString("I'm Julian.")
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      cursor: "_",
                      delay: 60,
                      wrapperClassName: "text-gray-800 font-bold",
                      cursorClassName: "text-gray-800 font-bold",
                    }}
                  />
                </h3>
                <div className="flex-grow"></div>
                <p className="text-[14px] lg:text-base text-gray-400 font-black uppercase tracking-[0.4em] leading-relaxed">
                  IT Security Student & Developer
                </p>
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
                    <LinkedInIcon className="w-12 h-12 text-gray-900" />
                  </a>
                </div>

                {/* GitHub */}
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
                    <GitHubIcon className="w-12 h-12 text-gray-900" />
                  </a>
                </div>

                {/* Location */}
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
                    <LocationIcon className="w-9 h-12 text-blue-600" />
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
              <p className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-bold mb-3">
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
              <p className="text-gray-800 text-xl lg:text-2xl leading-relaxed font-bold mb-3">
                Interesse an einer Zusammenarbeit?
              </p>
              <p className="text-gray-600 mb-6 text-left">
                Falls Sie Verstärkung für die Sicherheit Ihrer IT-Systeme
                suchen, freue ich mich über jede Nachricht!
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

      {/* SEKTION: MEIN MASTER STUDIUM */}
      <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 border border-gray-100 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight">
            Mein Master Studium
          </h3>
          <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TILE 1: MASTER THESIS GESUCH */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-500 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl w-10 h-10 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  📝
                </span>
                <a
                  href="https://linkedin.com/in/dein-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black bg-white border border-gray-200 text-gray-400 hover:!text-blue-600 hover:!bg-blue-50 px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 shadow-sm !no-underline"
                >
                  <span>KONTAKTIEREN</span>
                  <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
              <h5 className="font-bold text-lg mb-2 text-gray-900">
                Master Thesis
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ich suche für den Zeitraum vom 01.09.2026 bis 28.02.2027 ein
                Unternehmen, das meine Masterarbeit im Bereich IT-Security
                begleitet und betreut. Melden Sie sich bei Interesse gerne
                direkt bei mir!
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
              Abschlussarbeit & Suche
            </div>
          </div>

          {/* TILE 2: PENTEST BERICHT */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-500 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl w-10 h-10 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  🕵️‍♂️
                </span>
                <a
                  href={pentestPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-black bg-white border border-gray-200 text-blue-600 hover:!text-blue-600 hover:!bg-blue-50 px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 shadow-sm"
                  style={{ textDecoration: "none" }}
                >
                  <span>REPORT PDF</span>
                  <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
              <h5 className="font-bold text-lg mb-2 text-gray-900">
                Mein erster Pentest
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Im Rahmen meines Kurses "Advanced Pentesting" habe ich die Mr.
                Robot Instanz auf der Lernplattform TryHackMe kompromittiert.
                Der Bericht dokumentiert die vollständige Kill-Chain, von der
                ersten Informationspreisgabe bis hin zur finalen
                Root-Privilegieneskalation.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
              Black-Box Pentest Report
            </div>
          </div>

          {/* TILE 3: SCRUM ZERTIFIKAT */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-500 transition-all group flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <img
                  src={pspoBadge}
                  alt="PSPO I Logo"
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 shadow-sm rounded-full"
                />
                <span className="text-[10px] font-black bg-white border border-gray-200 text-green-600 px-2 py-1 rounded-md shadow-sm">
                  ZERTIFIZIERT
                </span>
              </div>
              <h5 className="font-bold text-lg mb-2 text-gray-900">
                Professional Scrum Product Owner
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Erfolgreiche PSPO I Zertifizierung nach einem zweitägigen
                Professional Scrum Training. Das Zertifikat validiert mein
                Wissen über das Scrum Framework sowie die Fähigkeit,
                Wertschöpfung und Product Management effektiv zu unterstützen.
              </p>
            </div>
            <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
              <a
                href="https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 hover:decoration-blue-600 text-gray-400 hover:text-blue-600 transition-all"
              >
                Scrum.org
              </a>{" "}
              | Albstadt 2025
            </div>
          </div>
        </div>
      </div>
      {/* SEKTION: MEIN BACHELOR STUDIUM */}
      <div ref={projectsRef} id="projekte" className="scroll-mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight">
              Mein Bachelor Studium
            </h3>
            <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TILE 1: BACHELOR THESIS */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl w-10 h-10 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    🎓
                  </span>
                  <span className="text-[10px] font-black bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-md shadow-sm">
                    Note: 1,7
                  </span>
                </div>
                <h5 className="font-bold text-lg mb-2 text-gray-900">
                  Bachelor Thesis
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  In Kooperation mit dem MOLIT Institut habe ich untersucht, ob
                  und inwiefern Machine-Learning-Verfahren die
                  Materialwirtschaft optimieren können. Hierfür entwickelte ich
                  einen automatisierten OCR-Workflow zur Datenaufbereitung und
                  evaluierte verschiedene Prognosemodelle für den Laborbedarf.
                </p>
              </div>
              <div className="mt-auto text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                Machine Learning & Data Automation
              </div>
            </div>

            {/* TILE 2: MOBILE COMPUTING */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-blue-300 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl w-10 h-10 inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    📱
                  </span>
                  <a
                    href="https://github.com/julianertle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black bg-white border border-gray-200 text-blue-600 hover:!text-blue-600 hover:!bg-blue-50 px-3 py-1.5 rounded-md transition-all no-underline inline-flex items-center gap-1.5 shadow-sm"
                    style={{ textDecoration: "none" }}
                  >
                    <span>LEARN MORE</span>
                    <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
                <h5 className="font-bold text-lg mb-2 text-gray-900">
                  Schwerpunkt Mobile Computing
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In meinem Studium der Angewandten Informatik haben wir uns
                  unter diesem Schwerpunkt mit Mikrokontrollern, Sensorik und
                  der Android App-Entwicklung befasst. Einige der Projekte, die
                  in diesem Rahmen entstanden sind, können auf meinem
                  GitHub-Profil eingesehen werden.
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                IoT & Mobile Development
              </div>
            </div>

            {/* TILE 3: ERPNEXT INTEGRATION */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:border-[#0089FF]/30 transition-all group flex flex-col justify-between overflow-visible">
              <div>
                <div className="flex justify-between items-start mb-4 overflow-visible">
                  <div
                    className="relative overflow-visible"
                    onMouseEnter={() => setActiveTooltip("erpnext-license")}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <ERPNextIcon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 cursor-help" />
                    <div
                      className={`absolute bottom-full mb-2 left-0 flex flex-col items-start transition-all duration-300 pointer-events-none z-50 ${activeTooltip === "erpnext-license" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    >
                      <div className="bg-gray-900 text-white text-[9px] leading-tight font-medium px-3 py-2 rounded-lg shadow-xl w-48">
                        ERPNext logo used under Frappe Technologies Pvt. Ltd.
                        trademark policy.
                        <span className="block mt-1 text-blue-300">
                          erpnext.com/license-trademark
                        </span>
                      </div>
                      <div className="w-3 h-3 bg-gray-900 rotate-45 -mt-1.5 ml-3"></div>
                    </div>
                  </div>
                  <a
                    href="https://frappe.io/erpnext/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black bg-white border border-gray-200 text-[#0089FF] hover:!text-blue-600 hover:!bg-blue-50 px-3 py-1.5 rounded-md transition-all no-underline inline-flex items-center gap-1.5 shadow-sm"
                    style={{ textDecoration: "none" }}
                  >
                    <span>LEARN MORE</span>
                    <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
                <h5 className="font-bold text-lg mb-2 text-gray-900">
                  ERPNext Integration
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Anpassung und Rollout des ERP-Systems in meiner Zeit als
                  Werkstudent. In engem Austausch mit Stakeholdern habe ich eine
                  eigene, auf die spezifischen Bedürfnisse des Unternehmens
                  zugeschnittene App in einem englischsprachigen Arbeitsumfeld
                  entwickelt und implementiert.
                </p>
              </div>
              <div className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-[#0089FF] transition-colors">
                Full-Stack Development & Consulting
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEKTION: KERNKOMPETENZEN (INTERAKTIV) */}
      <div className="pb-8 group/section">
        <div className="bg-white rounded-[2rem] shadow-lg border border-gray-100 p-8 lg:p-12 transition-all duration-500 hover:shadow-xl relative overflow-hidden">
          {/* HEADER & FILTER STEUERUNG */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight mb-2">
                Kernkompetenzen
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                Technologien und Methoden, mit denen ich bereits praktisch
                gearbeitet habe.
              </p>
            </div>

            {/* HOVER FILTER */}
            <div className="flex flex-wrap gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <div
                onMouseEnter={() => setActiveTooltip("dev")}
                onMouseLeave={() => setActiveTooltip(null)}
                className="px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase cursor-default transition-all bg-white shadow-sm hover:bg-blue-600 hover:text-white border border-slate-200"
              >
                Entwicklung
              </div>
              <div
                onMouseEnter={() => setActiveTooltip("cyber")}
                onMouseLeave={() => setActiveTooltip(null)}
                className="px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase cursor-default transition-all bg-white shadow-sm hover:bg-red-600 hover:text-white border border-slate-200"
              >
                Sicherheit
              </div>
              <div
                onMouseEnter={() => setActiveTooltip("personal")}
                onMouseLeave={() => setActiveTooltip(null)}
                className="px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase cursor-default transition-all bg-white shadow-sm hover:bg-emerald-600 hover:text-white border border-slate-200"
              >
                Expertise
              </div>
            </div>
          </div>

          {/* DYNAMISCHES BADGE-GRID */}
          <div className="flex flex-wrap gap-4 relative z-10">
            {[
              { name: "React / Vite", cat: "dev" },
              { name: "Java", cat: "dev" },
              { name: "Python", cat: "dev" },
              { name: "Android App Dev", cat: "dev" },
              { name: "MariaDB / Postgres", cat: "dev" },
              { name: "Docker & Compose", cat: "dev" },
              { name: "Linux (Terminal)", cat: "dev" },
              { name: "Tailwind CSS", cat: "dev" },
              { name: "Pentesting", cat: "cyber" },
              { name: "Side-Channel Attacks", cat: "cyber" },
              { name: "OSINT & Scraping", cat: "cyber" },
              { name: "ISO 27001 (Grundlagen)", cat: "cyber" }, // Fokus auf "Grundlagen" für ehrliche Selbsteinschätzung
              { name: "ERPNext / Frappe", cat: "dev" },
              { name: "Scrum (PSPO I)", cat: "personal" },
              { name: "Englisch (C1 DAAD)", cat: "personal" },
              { name: "KI-gestützte Workflows", cat: "dev" },
              { name: "Stakeholder Management", cat: "personal" },
            ].map((item) => (
              <div
                key={item.name}
                className={`
                  px-5 py-3 rounded-2xl border font-bold text-sm transition-all duration-300 transform-gpu
                  ${!activeTooltip ? "bg-white border-slate-200 text-slate-700 shadow-sm" : ""}
                  ${
                    activeTooltip === item.cat
                      ? `scale-110 z-20 shadow-md ${item.cat === "dev" ? "bg-blue-50 border-blue-400 text-blue-700" : item.cat === "cyber" ? "bg-red-50 border-red-400 text-red-700" : "bg-emerald-50 border-emerald-400 text-emerald-700"}`
                      : activeTooltip
                        ? "opacity-20 grayscale blur-[1px] scale-95"
                        : ""
                  }
                `}
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-0 opacity-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
