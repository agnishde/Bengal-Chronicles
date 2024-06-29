// src/pages/VirtualTour.js
import React from 'react';
import { useParams } from 'react-router-dom';
import GoogleMapEmbed from '../components/GoogleMapEmbed';

const VirtualTour = () => {
  const { site } = useParams();

  const mapSources = {
    'victoria-memorial': 'https://www.google.com/maps/embed?pb=!4v1719645119068!6m8!1m7!1ssaR3roR-in-rHkWcJHq9aA!2m2!1d22.54390153658023!2d88.34209902273892!3f9.351444562899815!4f6.257074325899609!5f0.7820865974627469',
    'belur-math': 'https://www.google.com/maps/embed?pb=!4v1719645119068!6m8!1m7!1sbelurMathExample!2m2!1d22.5443213!2d88.3482135!3f10.241575!4f6.456235!5f0.7820865974627469',
    'dakshineswar-kali-temple': 'https://www.google.com/maps/embed?pb=!4v1719645119068!6m8!1m7!1sdakshineswarExample!2m2!1d22.5443213!2d88.3482135!3f10.241575!4f6.456235!5f0.7820865974627469'
    // Add more sources as needed
  };

  return (
    <div>
      <h2>{site.replace('-', ' ')} Virtual Tour</h2>
      <GoogleMapEmbed src={mapSources[site]} />
    </div>
  );
};

export default VirtualTour;


