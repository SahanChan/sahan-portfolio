'use client'

import React, {useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

interface ShowcaseSectionProps {
    isOne: boolean;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({isOne}) => {

    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)


    const project4Ref = useRef(null)
    const project5Ref = useRef(null)
    const project6Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current, project6Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card, {y: 50, opacity: 0}, {
                    y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: {
                        trigger: card, start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
    }, []);


    return (


        (
            <section id={"work"} ref={sectionRef} className={"app-showcase"}>
                <div className="w-full ">
                    <div className="showcaselayout">
                        {/*left*/}
                        <div className="first-project-wrapper" ref={isOne ? project1Ref : project4Ref}>
                            <div className="image-wrapper">
                                {
                                    isOne ? (
                                        <Image src={"/images/project1.png"} alt={"Lanka Journey"} className={"w-full h-full object-cover rounded-xl absolute inset-0"} width={1920} height={1080}/>

                                    ) : (


                                        <video
                                            src="/videos/secrets.webm"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{width: '100%', height: '100%',pointerEvents: 'none',  // disables any interaction like hover
                                                userSelect: 'none',  }}
                                            preload="auto"

                                        />

                                    )
                                }
                            </div>
                            <div className="text-content">

                                {isOne ? (
                                    <>
                                        <h2>A complete travel guide app for those planning trips in Sri Lanka ,
                                            user-friendly
                                            ,guide app
                                            called Lanka Journey.</h2>
                                        <p className="text-white-50 md:text-xl">
                                            An android app built with React Native, offering a user-friendly
                                            experience
                                            and optimized performance, powered by a Supabase backend.

                                        </p>
                                    </>


                                ) : (
                                    <>
                                        <h2>3d designs and animations made for clients</h2>
                                        <p className="text-white-50 md:text-xl">
                                            made with blender and after effects

                                        </p></>

                                )}

                            </div>


                        </div>
                        {/*right*/}

                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={isOne ? project2Ref : project5Ref}>

                                {isOne ? (
                                    <div className={"image-wrapper bg-[#ffefdb]"}>
                                        <Image src={"/images/project2.png"} alt={"library management"} className={"w-full h-full object-contain rounded-xl"} width={1920} height={1080}/>


                                    </div>

                                ) : (


                                    <div className={"image-non-wrapper"}>


                                        <video
                                            src="/videos/vodoo.webm"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{width: '100%', height: '100%'}}
                                        />


                                    </div>
                                )}


                                {isOne ? (
                                    <h2>3D Product Designs & Animations - Client Work</h2>

                                ) : (
                                    <h2>3D Product Designs & Animations - Client Work</h2>

                                )}

                            </div>

                            <div className="project" ref={isOne ? project3Ref : project6Ref}>
                                {isOne ? (

                                    <div className={"image-wrapper bg-[#ffe7eb]"}>

<Image src={"/images/project3.png"} alt={"YC Directory"} className={"w-full h-full object-contain rounded-xl"} width={1920} height={1080} />


                                    </div>
                                ) : (

                                    <div className={"image-non-wrapper "}>


                                        <video
                                            src="/videos/vodooBottls.webm"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{width: '100%', height: '100%'}}
                                        />


                                    </div>
                                )}

                                {isOne ? (
                                    <h2>Startup Showcase App</h2>

                                ) : (
                                    <h2>Startup Showcase App</h2>

                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )


    )
}
export default ShowcaseSection
