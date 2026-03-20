import React from "react";
import portraitImage from "../assets/portrait.png";
import ContentInfo from "./ContentSections/ContentInfo";
import SkillsInfo from "./ContentSections/SkillsInfo";
import Languages from "./Languages";

// Icons als SVG-Komponenten (spart Imports und ist sauberer)
const LinkedInIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function Content() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      {/* OBERE REIHE: Bento Grid (2 Spalten, 50/50 Aufteilung) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* KARTE 1: PORTRAIT & HEY INFO */}
        {/* WICHTIG: Kein p-6, kein bg-white, kein border hier! */}
        <div className="rounded-3xl shadow-lg overflow-hidden self-stretch transition-hover hover:shadow-xl">
          {/* Flex-Container: Spalte mobil, Reihe Desktop */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* BILD-BEREICH (Linke Seite Desktop) */}
            {/* Nimmt 60% der Breite auf Desktop ein (lg:w-3/5) */}
            <div className="lg:w-3/5 h-full group bg-white relative transition-all duration-300 hover:z-10">
              {/* 'relative' ist nötig, damit z-index wirkt. 'hover:z-10' hebt es beim Hovern an. */}
              <a href="/about" className="block w-full h-full">
                <img
                  src={portraitImage}
                  // Der Rest bleibt gleich
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Portrait"
                />
              </a>
            </div>

            {/* TEXT-BEREICH (Rechte Seite Desktop) */}
            {/* Nimmt 40% der Breite ein (lg:w-2/5) */}
            {/* Nutzt bg-slate-100, um sich vom weißen Bild abzuheben */}
            <div className="lg:w-2/5 h-full flex flex-col justify-center bg-slate-100 p-8 text-center lg:text-left space-y-4 bg-white">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-950 tracking-tight">
                  Hey, I'm Julian.
                </h3>
                <p className="text-xl text-indigo-600 font-semibold mt-1">
                  I'm a Web Developer.
                </p>
              </div>

              <p className="text-gray-700 flex items-center justify-center lg:justify-start gap-3 text-lg">
                <span className="text-2xl">🏔️</span> Allgäu, Germany.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex items-center justify-center lg:justify-start gap-5 pt-3">
                <a
                  href="https://linkedin.com/in/dein-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#0077b5] transition-all hover:scale-110"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://github.com/julianertle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-950 transition-all hover:scale-110"
                  title="GitHub"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* KARTE 2: INFO */}
        <div className="h-full">
          {/* Stelle sicher, dass ContentInfo flexibel ist und keine feste max-w hat */}
          <ContentInfo />
        </div>
      </div>

      {/* UNTERE REIHE: 3er Grid für Skills, Sprachen, etc. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* KARTE 3: SKILLS */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 transition-hover hover:shadow-md">
          <SkillsInfo />
        </div>

        {/* KARTE 4: SPRACHEN */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 transition-hover hover:shadow-md">
          <Languages />
        </div>

        {/* KARTE 5: PLACEHOLDER / CYBERSECURITY FOKUS */}
        <div className="bg-gray-900 rounded-3xl shadow-lg p-8 text-gray-100 flex flex-col justify-between transition-hover hover:shadow-xl hover:shadow-gray-800/20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🛡️</span>
              <h4 className="text-2xl font-bold text-white">Cybersecurity</h4>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Mein Ziel ist die Spezialisierung im Bereich{" "}
              <strong>Cybersecurity</strong>. Ich fokussiere mich derzeit auf
              Netzwerksicherheit, Penetration Testing und sichere
              Softwarearchitekturen.
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
