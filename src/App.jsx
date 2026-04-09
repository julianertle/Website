import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext"; // Import the new Provider
import HomeInit from "./components/Home";
import About from "./components/About";
import Imprint from "./components/Imprint";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeInit />} />
            <Route path="/about" element={<About />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
