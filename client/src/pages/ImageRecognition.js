
import React, { useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const identifyImage = async () => {
    const img = document.getElementById('inputImage');
    const model = await mobilenet.load();
    const predictions = await model.classify(img);
    setPredictions(predictions);
  };

  return (
    <div>
      <h2>Image Recognition</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img id="inputImage" src={image} alt="Uploaded" width="400" />}
      <button onClick={identifyImage}>Identify Image</button>
      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                {prediction.className}: {Math.round(prediction.probability * 100)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageRecognition;
