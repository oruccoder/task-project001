import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function NeuralTree() {
  const ref = useRef();
  
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = 2.5 * Math.sqrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 1.5;
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.1;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={ref}>
      <Points positions={points}>
        <PointMaterial
          transparent
          color="#22c55e"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#15803d" 
          wireframe 
          transparent 
          opacity={0.2} 
          emissive="#22c55e"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

const Scene3D = ({ sceneRef }) => {
  return (
    <div ref={sceneRef} className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#22c55e" intensity={2} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <NeuralTree />
          </Float>
        </Suspense>

        <fog attach="fog" args={['#050505', 5, 15]} />
      </Canvas>
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)]" />
    </div>
  );
};

import { Suspense } from 'react';
export default Scene3D;