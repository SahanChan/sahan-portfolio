'use client'

import React, {useRef, ReactNode} from 'react'
import Image from "next/image";

interface CardType {
    review: string;
    [key: string]: any;
}

interface GlowCardProps {
    card: CardType;
    children: ReactNode;
    index: number;
}

const GlowCard = ({card, children, index}: GlowCardProps) => {

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRefs.current[index]
        if (!card) return


        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // calculate the angle from the center of the card to the mouse
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        // adjust the angle so that it's between 0 and 360
        angle = (angle + 360) % 360;

        // set the angle as a CSS variable
        card.style.setProperty("--start", (angle + 60).toString());


    }
    return (
        <div ref={(el) => {cardRefs.current[index] = el}} onMouseMove={handleMouseMove(index)}
             className={"card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"}>
            <div className="glow"></div>
            <div className={"flex items-center gap-1 mb-5"}>
                {Array.from({length: 5}, (_, i) => (

                    <Image
                        src="/images/star.png"
                        alt="star"
                        className="size-5"
                        width={20}  // optional but recommended
                        height={20} // optional but recommended
                        key={i}
                    />
                ))}
            </div>
            <div className="mb-5">
                <p className={"text-white-50 text-lg"}>{card.review}</p>
            </div>
            {children}
        </div>
    )
}
export default GlowCard
