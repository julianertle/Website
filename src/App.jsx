import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext"; // Import the new Provider
import HomeInit from "./pages/Home";
import About from "./pages/About";
import Imprint from "./pages/Imprint";

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
