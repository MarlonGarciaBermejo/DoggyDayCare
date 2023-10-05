import React from 'react';
import Welcome from './components/Welcome';
import Catalog from './components/Catalog';
import About from './components/About';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
