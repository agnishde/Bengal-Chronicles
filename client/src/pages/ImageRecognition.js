// src/pages/ImageRecognition.js
import React, { useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const imageRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setPredictions([]);  // Clear previous predictions
      };
      reader.readAsDataURL(file);
    }
  };

  const identifyImage = async () => {
    const model = await mobilenet.load();
    const predictions = await model.classify(imageRef.current);
    setPredictions(predictions);
  };

  return (
    <div>
      <h2>Image Recognition</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <img src={image} alt="Selected" ref={imageRef} width="400" />
          <button onClick={identifyImage}>Identify Image</button>
        </div>
      )}
      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                {prediction.className}: {(prediction.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageRecognition;

