'use client'

import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room";
import {Roomie} from "./Roomie";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import {ForestHouse} from "./Forest-house";

interface HeroExperienceProps {}

const HeroExperience: React.FC<HeroExperienceProps> = () => {
    const isTablet = useMediaQuery({maxWidth: 1024});
    const isMobile = useMediaQuery({maxWidth: 768});


    return (

        <Canvas camera={{position: [0, 0, 15], fov: 45}}>


            <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5}
                           minPolarAngle={Math.PI / 90}
                           maxPolarAngle={Math.PI / 2}/>

            {/*<OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5}*/}
            {/*               minPolarAngle={Math.PI / 5}*/}
            {/*               maxPolarAngle={Math.PI / 2}/>*/}

            <HeroLights/>
            <Particles count={100}/>
            <group scale={isMobile ? 40 : 50
            }
                   position={[1, -4, 0]}
                   rotation={[0, -5, 0]}>


                {/*<Room/>*/}
                {/*<group scale={isMobile ? 0.5 : 0.7}*/}
                {/*       position={[0, -3.5, 0]}*/}
                {/*       rotation={[29.85, 0, -30]}>*/}


                {/*<Roomie/>*/}
                {/*<group scale={isMobile ? 0.7 : 1}*/}
                {/*       position={[0, -3.5, 0]}*/}
                {/*       rotation={[0, -Math.PI / 4, 0]}*/}

                <ForestHouse/>


            </group>
        </Canvas>
    )
}
export default HeroExperience
