import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObject({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </Sphere>
  );
}

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={meshRef} position={[0, 0, 0]} args={[1, 1, 1]}>
      <meshStandardMaterial color="#3b82f6" wireframe />
    </Box>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <FloatingObject position={[-3, 2, -2]} color="#3b82f6" />
        <FloatingObject position={[3, -1, -3]} color="#8b5cf6" />
        <FloatingObject position={[-2, -2, -1]} color="#06b6d4" />
        <FloatingObject position={[2, 2, -4]} color="#ec4899" />
        
        <RotatingCube />
      </Canvas>
    </div>
  );
}