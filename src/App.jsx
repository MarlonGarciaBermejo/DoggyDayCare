import React from 'react';
import Welcome from './components/Welcome';
import Catalog from './components/Catalog';
import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Catalog" element={<Catalog />} />      
      </Routes>
      </div>
  );
}

export default App;


