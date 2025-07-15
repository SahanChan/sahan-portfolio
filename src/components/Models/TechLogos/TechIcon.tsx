'use client'

import React, {useEffect} from 'react'
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import * as THREE from "three";
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

interface TechIconModel {
  modelPath: string;
  name: string;
  scale: number | [number, number, number];
  rotation: [number, number, number];
}

interface TechIconProps {
  model: TechIconModel;
}

const TechIcon = ({model}: TechIconProps) => {


    const scene = useGLTF(model.modelPath) as unknown as GLTFResult;


    useEffect(() => {
        if (model.name === 'Interactive Developer') {
            scene.scene.traverse((child: THREE.Object3D) => {
                if ((child as THREE.Mesh).isMesh && child.name === 'Object_5') {
                    (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }
    }, [scene, model.name])
    return (
        <Canvas>
            <ambientLight intensity={0.3}/>
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <Environment preset="city"/>

            <OrbitControls enableZoom={false}/>
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene}/>
                </group>
            </Float>
        </Canvas>
    )
}
export default TechIcon
