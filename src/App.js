import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeInit from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeInit />} />
        <Route path='/about' element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>

  );
}



export default App;
