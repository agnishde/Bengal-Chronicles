import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Bengali Heritage Online</h1>
      <p>Explore the rich cultural heritage of Bengal</p>
      <Link to="/explore">Explore Now</Link>
    </div>
  );
};

export default Home;