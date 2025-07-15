'use client'

import React from 'react'
import {useGLTF} from '@react-three/drei'
import * as THREE from "three";
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    GroundPlane_Plane_0_1: THREE.Mesh;
    GroundPlane_Plane_0_2: THREE.Mesh;
    GroundPlane_Plane_0_3: THREE.Mesh;
    GroundPlane_Plane_0_4: THREE.Mesh;
    GroundPlane_Plane_0_5: THREE.Mesh;
    GroundPlane_Plane_0_6: THREE.Mesh;
    GroundPlane_Plane_0_7: THREE.Mesh;
    GroundPlane_Plane_0_8: THREE.Mesh;
    GroundPlane_Plane_0_9: THREE.Mesh;
    GroundPlane_Plane_0_10: THREE.Mesh;
    GroundPlane_Plane_0_11: THREE.Mesh;
    GroundPlane_Plane_0_12: THREE.Mesh;
  };
  materials: {
    Plane: THREE.MeshStandardMaterial;
    Window: THREE.MeshStandardMaterial;
    RoofMoss: THREE.MeshStandardMaterial;
    WoodPlanks: THREE.MeshStandardMaterial;
    House: THREE.MeshStandardMaterial;
    GrassALPHA: THREE.MeshStandardMaterial;
    WoodFence: THREE.MeshStandardMaterial;
    BigRock: THREE.MeshStandardMaterial;
    BrichTree: THREE.MeshStandardMaterial;
    TreeLeafs: THREE.MeshStandardMaterial;
    Ground: THREE.MeshStandardMaterial;
    Animals: THREE.MeshStandardMaterial;
  };
};

type RoomProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  [key: string]: any;
};

export function Room(props: RoomProps) {
    const {nodes, materials} = useGLTF('/models/optimized-house.glb') as unknown as GLTFResult

    // const curtainMaterial = new THREE.MeshPhongMaterial({
    //     color: "#d90429",
    // });
    return (
        <group {...props} dispose={null}>
            <group>

                <mesh geometry={nodes.GroundPlane_Plane_0_1.geometry} material={materials.Plane}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_2.geometry} material={materials.Window}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_3.geometry} material={materials.RoofMoss}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_4.geometry} material={materials.WoodPlanks}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_5.geometry} material={materials.House}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_6.geometry} material={materials.GrassALPHA}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_7.geometry} material={materials.WoodFence}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_8.geometry} material={materials.BigRock}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_9.geometry} material={materials.BrichTree}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_10.geometry} material={materials.TreeLeafs}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_11.geometry} material={materials.Ground}/>
                <mesh geometry={nodes.GroundPlane_Plane_0_12.geometry} material={materials.Animals}/>

            </group>
        </group>
    )
}

useGLTF.preload('/models/optimized-house.glb')
