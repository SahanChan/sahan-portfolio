/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\models\supabase.glb -T 
Files: .\public\models\supabase.glb [16.24KB] > Z:\Next\ReactDeveloperPortfolio\supabase-transformed.glb [2.26KB] (86%)
*/

import React from 'react'
import {useGLTF} from '@react-three/drei'
import * as THREE from "three";
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
  };
  materials: {
    "SVGMat.001": THREE.MeshStandardMaterial;
  };
};

type SupabaseModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  [key: string]: any;
};

export function SupabaseModel(props: SupabaseModelProps) {
    const {nodes, materials} = useGLTF('/models/supabase-transformed.glb') as GLTFResult
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']}/>
        </group>
    )
}

useGLTF.preload('/models/supabase-transformed.glb')
