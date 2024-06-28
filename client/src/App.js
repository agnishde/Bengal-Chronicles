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
      </Routes>
    </Router>
  );
};

export default App;
