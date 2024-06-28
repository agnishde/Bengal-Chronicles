import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Discover from './pages/Discover';
import Learn from './pages/Learn';
import Create from './pages/Create';
import Community from './pages/Community';
import Resources from './pages/Resources';
import About from './pages/About';
import VirtualTour from './pages/VirtualTour'; // New page
import ImageRecognition from './pages/ImageRecognition'; // New page
import CulturalPractices from './pages/CulturalPractices'; // New page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/create" element={<Create />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/virtual-tour" element={<VirtualTour />} /> {/* New route */}
        <Route path="/image-recognition" element={<ImageRecognition />} /> {/* New route */}
        <Route path="/cultural-practices" element={<CulturalPractices />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
