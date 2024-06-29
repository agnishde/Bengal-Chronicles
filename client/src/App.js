// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import CulturalPractices from './pages/CulturalPractices';
import ImageRecognition from './pages/ImageRecognition';
import Resources from './pages/Resources';
import VirtualTour from './pages/VirtualTour';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cultural-practices" element={<CulturalPractices />} />
        <Route path="/image-recognition" element={<ImageRecognition />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/virtual-tour/:site" element={<VirtualTour />} />
      </Routes>
    </Router>
  );
};

export default App;

