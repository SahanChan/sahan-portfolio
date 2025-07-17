
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Blender(props) {
  const { nodes, materials } = useGLTF('/models/blender.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.173}>
        <group position={[0.495, 0.235, -0.539]}>
          <group position={[-0.067, -0.008, 0.047]}>
            <mesh geometry={nodes.Object_0.geometry} material={materials.Orange} />
            <mesh geometry={nodes.Object_0_1.geometry} material={materials.Blue} />
          </group>
          <mesh geometry={nodes.Object_4001.geometry} material={materials.Blue} position={[-0.067, -0.008, 0.047]} />
        </group>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0.233, 0.017, -0.247]} rotation={[Math.PI / 2, 0, 0]} scale={1.252} />
      <mesh geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} position={[0.233, 0.017, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={1.252} />
    </group>
  )
}

useGLTF.preload('/models/blender.glb')
