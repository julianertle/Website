import React, { createContext, useContext, useState } from "react";

export const translations = {
  de: {
    // Navigation
    navStart: "Start",
    navHobbies: "Hobbys",
    navMisc: "Sonstiges",

    // Hero Section
    heroTitle: "Hey, ich bin Julian.",
    heroSubtitle: "IT Sicherheit Student & Developer",
    location: "Allgäu, Deutschland",
    welcome: "Schön, dass du hier bist!",
    introText:
      "Wenn du mich als Person genauer kennenlernen möchtest, bist du hier genau richtig. Sieh dir gerne meine Projekte, meinen Werdegang und meine Motivation an.",
    quote:
      "Als Developer macht mir vor allem die Softwareentwicklung Spaß. Gerade spezialisiere ich mich auf die IT-Sicherheit, um in Zukunft Unternehmen abzusichern und Anwendungen zu bauen, die von Grund auf resilient gegen moderne Bedrohungen sind.",

    // Contact
    collabTitle: "Interesse an einer Zusammenarbeit?",
    collabText:
      "Falls Sie Verstärkung für die Sicherheit Ihrer IT-Systeme suchen, freue ich mich über jede Nachricht!",
    contactBtn: "Kontakt aufnehmen",

    // Master Studium Section
    masterTitle: "Mein Master Studium",
    masterThesis: "Master Thesis",
    masterThesisText:
      "Ich suche für den Zeitraum vom 01.09.2026 bis 28.02.2027 ein Unternehmen, das meine Masterarbeit im Bereich IT-Security begleitet und betreut. Melden Sie sich bei Interesse gerne direkt bei mir!",
    pentestTitle: "Mein erster Pentest",
    pentestText:
      "Im Rahmen meines Kurses 'Advanced Pentesting' habe ich die Mr. Robot Instanz auf der Lernplattform TryHackMe kompromittiert. Der Bericht dokumentiert die vollständige Kill-Chain, von der ersten Informationspreisgabe bis hin zur finalen Root-Privilegieneskalation.",
    scrumText:
      "Erfolgreiche PSPO I Zertifizierung nach einem zweitägigen Professional Scrum Training. Das Zertifikat validiert mein Wissen über das Scrum Framework sowie die Fähigkeit, Wertschöpfung und Product Management effektiv zu unterstützen.",

    // Bachelor Studium Section
    bachelorTitle: "Mein Bachelor Studium",
    bachelorThesisText:
      "In Kooperation mit dem MOLIT Institut habe ich untersucht, ob und inwiefern Machine-Learning-Verfahren die Materialwirtschaft optimieren können. Hierfür entwickelte ich einen automatisierten OCR-Workflow zur Datenaufbereitung und evaluierte verschiedene Prognosemodelle für den Laborbedarf.",
    mobileComputingTitle: "Schwerpunkt Mobile Computing",
    mobileComputingText:
      "In meinem Studium der Angewandten Informatik haben wir uns unter diesem Schwerpunkt mit Mikrokontrollern, Sensorik und der Android App-Entwicklung befasst. Einige der Projekte, die in diesem Rahmen entstanden sind, können auf meinem GitHub-Profil eingesehen werden.",
    erpNextText:
      "Anpassung und Rollout des ERP-Systems in meiner Zeit als Werkstudent. In engem Austausch mit Stakeholdern habe ich eine eigene, auf die spezifischen Bedürfnisse des Unternehmens zugeschnittene App in einem englischsprachigen Arbeitsumfeld entwickelt und implementiert.",

    // Skills Section
    skillsTitle: "Technologien & Skills",
    skillsSubtitle:
      "Technologien, Skills und Methoden mit denen ich schon gearbeitet habe.",
  },
  en: {
    // Navigation
    navStart: "Home",
    navHobbies: "Hobbies",
    navMisc: "Misc",

    // Hero Section
    heroTitle: "Hey, I'm Julian.",
    heroSubtitle: "IT Security Student & Developer",
    location: "Allgäu, Germany",
    welcome: "Great to have you here!",
    introText:
      "If you want to get to know me better as a person, you've come to the right place. Feel free to check out my projects, my background, and my motivation.",
    quote:
      "As a developer, I particularly enjoy software development. I am currently specializing in IT security to protect companies in the future and build applications that are resilient against modern threats from the ground up.",

    // Contact
    collabTitle: "Interested in working together?",
    collabText:
      "If you are looking for support for the security of your IT systems, I look forward to hearing from you!",
    contactBtn: "Get in touch",

    // Master Studium Section
    masterTitle: "My Master's Degree",
    masterThesis: "Master's Thesis",
    masterThesisText:
      "I am looking for a company to support and supervise my Master's thesis in the field of IT Security for the period from Sept 1, 2026, to Feb 28, 2027. Feel free to contact me directly if interested!",
    pentestTitle: "My First Pentest",
    pentestText:
      "As part of my 'Advanced Pentesting' course, I compromised the Mr. Robot instance on the TryHackMe learning platform. The report documents the complete kill-chain, from initial information disclosure to final root privilege escalation.",
    scrumText:
      "Successful PSPO I certification following a two-day Professional Scrum Training. The certificate validates my knowledge of the Scrum framework and the ability to effectively support value creation and product management.",

    // Bachelor Studium Section
    bachelorTitle: "My Bachelor's Degree",
    bachelorThesisText:
      "In cooperation with the MOLIT Institute, I investigated whether and to what extent machine learning methods can optimize materials management. I developed an automated OCR workflow for data preparation and evaluated various forecasting models for laboratory requirements.",
    mobileComputingTitle: "Focus on Mobile Computing",
    mobileComputingText:
      "In my Applied Computer Science studies, we focused on microcontrollers, sensor technology, and Android app development under this specialization. Some of the projects created in this context can be viewed on my GitHub profile.",
    erpNextText:
      "Customization and rollout of the ERP system during my time as a working student. In close exchange with stakeholders, I developed and implemented a custom app tailored to the company's specific needs in an English-speaking environment.",

    // Skills Section
    skillsTitle: "Technologies & Skills",
    skillsSubtitle: "Technologies, skills, and methods I have worked with.",
  },
};
const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("de");

  const toggleLang = () => setLang((prev) => (prev === "de" ? "en" : "de"));

  // This function MUST be inside the component to "see" the updated lang state
  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
