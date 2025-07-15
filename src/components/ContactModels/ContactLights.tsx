import React from 'react'
import * as Three from "three";

interface ContactLightsProps {}

const ContactLights: React.FC<ContactLightsProps> = () => {
    return (
        <>
            {/* Main key light */}
            <spotLight position={[2, 5, 6]} angle={0.15} intensity={80} penumbra={0.2} color="white"/>

            {/* Blue accent light */}
            <spotLight position={[4, 5, 4]} angle={0.3} intensity={30} penumbra={0.5} color="#4cc9f0"/>

            {/* Purple accent light */}
            <spotLight position={[-3, 5, 5]} angle={0.4} intensity={40} penumbra={1} color="#9d4edd"/>

            {/* Area light for screen glow */}
            <primitive 
                object={new Three.RectAreaLight('#ffffff', 7, 2, 1.5)} 
                position={[0, 0, 2]} 
                intensity={10}
                rotation={[0, 0, 0]}
            />

            {/* Ambient light for overall illumination */}
            <ambientLight intensity={0.3} color="#ffffff"/>

            {/* Fill light from below */}
            <pointLight position={[0, -1, 2]} intensity={5} color="#7209b7"/>
        </>
    )
}

export default ContactLights
