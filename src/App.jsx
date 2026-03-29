import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext'; // FIXED: Added Import
import HomeInit from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
import Imprint from './components/Imprint'; // Import your Imprint component


function App() {
  return (
    <ThemeProvider> {/* FIXED: Added Provider Wrapper */}
      <Router>
        <Routes>
          <Route path='/' element={<HomeInit />} />
          <Route path='/about' element={<About />} />
          <Route path='/imprint' element={<Imprint />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}



export default App;