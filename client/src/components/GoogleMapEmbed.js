// src/components/GoogleMapEmbed.js
import React from 'react';

const GoogleMapEmbed = ({ src }) => {
  return (
    <iframe
      src={src}
      width="800"
      height="600"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapEmbed;
