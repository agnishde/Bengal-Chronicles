
import React from 'react';
import { Canvas } from '@react-three/fiber';

const Simple3DScene = () => {
  return (
    <Canvas style={{ height: 200 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    </Canvas>
  );
};

export default Simple3DScene;
