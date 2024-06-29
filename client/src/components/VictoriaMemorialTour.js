import React from 'react';
import GoogleMapEmbed from './GoogleMapEmbed';

const VictoriaMemorialTour = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!4v1719645119068!6m8!1m7!1ssaR3roR-in-rHkWcJHq9aA!2m2!1d22.54390153658023!2d88.34209902273892!3f9.351444562899815!4f6.257074325899609!5f0.7820865974627469";


  return (
    <div>
      <h2>Victoria Memorial Virtual Tour</h2>
      <GoogleMapEmbed src={mapSrc} />
    </div>
  );
};

export default VictoriaMemorialTour;