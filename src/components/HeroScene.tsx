"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.08;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={mesh} scale={1.7}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#6d28d9"
          attach="material"
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          emissive="#22d3ee"
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  );
}

function Rig() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  useFrame(() => {
    camera.position.x += (target.current.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (-target.current.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Particles() {
  const count = 500;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, []);
  const points = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (points.current) points.current.rotation.y = state.clock.elapsedTime * 0.015;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#67e8f9" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-4, -3, 2]} intensity={1} color="#8b5cf6" />
      <Blob />
      <Particles />
      <Sparkles count={40} scale={[8, 6, 4]} size={2} speed={0.3} color="#c4b5fd" opacity={0.5} />
      <Rig />
    </Canvas>
  );
}
