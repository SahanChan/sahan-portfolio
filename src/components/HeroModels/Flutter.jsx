/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\flutter.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Flutter(props) {
  const { nodes, materials } = useGLTF('/models/flutter-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_1.geometry} material={materials['SVGMat.026']} />
      <mesh geometry={nodes.Object_1_1.geometry} material={materials['SVGMat.027']} />
      <mesh geometry={nodes.Object_1_2.geometry} material={materials['SVGMat.028']} />
    </group>
  )
}

useGLTF.preload('/models/flutter-transformed.glb')
