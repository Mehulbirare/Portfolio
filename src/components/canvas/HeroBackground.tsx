"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Sphere args={[1, 128, 128]} scale={2.5}>
                    <MeshDistortMaterial
                        color="#7000FF"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.1}
                        metalness={0.8}
                        emissive="#00F5FF"
                        emissiveIntensity={0.2}
                    />
                </Sphere>
            </Float>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#00F5FF" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#7000FF" />
        </group>
    );
}

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Scene />
            </Canvas>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,1)_80%)]" />
        </div>
    );
}
