'use client'

import React, {useEffect, useState, ErrorInfo, ReactNode} from 'react'
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import {GLTF, GLTFLoader} from 'three-stdlib';


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

// Error Boundary to catch GLTF loading errors
class ModelErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Model loading error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-gray-400 text-xs">Model unavailable</div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Component that handles the actual model rendering
const ModelRenderer = ({model}: TechIconProps) => {
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
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
    );
};

const TechIcon = ({model}: TechIconProps) => {
    return (
        <Canvas>
            <ambientLight intensity={0.3}/>
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <Environment preset="city"/>
            <OrbitControls enableZoom={false}/>

            <ModelErrorBoundary>
                <ModelRenderer model={model} />
            </ModelErrorBoundary>
        </Canvas>
    )
}
export default TechIcon
