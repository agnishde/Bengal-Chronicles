import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import VirtualTour from './pages/VirtualTour'; // Import the new page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/virtual-tour" element={<VirtualTour />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
};

export default App;
