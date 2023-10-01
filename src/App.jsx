import React from 'react';
import Welcome from './components/Welcome';
import Catalog from './components/Catalog';
import DogInfo from './components/DogInfo';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/DogInfo" element={<DogInfo />} />
      </Routes>
      </div>
  );
}

export default App;


