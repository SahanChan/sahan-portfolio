'use client'

import {useRef, useMemo} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

interface ParticleData {
    position: [number, number, number];
    speed: number;
}

interface ParticlesProps {
    count?: number;
}

const Particles: React.FC<ParticlesProps> = ({count = 200}) => {
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo<ParticleData[]>(() => {
        const temp: ParticleData[] = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    Math.random() * 10 + 5, // higher starting point
                    (Math.random() - 0.5) * 10,
                ],
                speed: 0.005 + Math.random() * 0.001,
            });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;

        const positions = mesh.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
            let y = positions[i * 3 + 1];
            y -= particles[i].speed;
            if (y < -2) y = Math.random() * 10 + 5;
            positions[i * 3 + 1] = y;
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    const positions = new Float32Array(count * 3);
    particles.forEach((p, i) => {
        positions[i * 3] = p.position[0];
        positions[i * 3 + 1] = p.position[1];
        positions[i * 3 + 2] = p.position[2];
    });


    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3} args={[]}                />
            </bufferGeometry>
            <pointsMaterial
                color="#98f542"
                size={0.05}
                transparent
                opacity={0.9}
                depthWrite={false}
            />
        </points>
    );
};

export default Particles;
