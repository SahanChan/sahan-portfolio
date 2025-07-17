import React from 'react'
import Image from "next/image";

interface ButtonProps {
    text: string;
    className?: string;
    id?: string;
}

const Button = ({text, className, id}: ButtonProps) => {
    return (
        <a onClick={(e) => {

            e.preventDefault();
            const target = document.getElementById('counter');


            if (target && id) {
                const offset = window.innerHeight * 0.15;

                const top = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({top, behavior: 'smooth'})
            }
        }}
           className={`${className ?? ""} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle"/>
                <p className='text'>{text}</p>
                <div className="arrow-wrapper">
                    <Image
                        src="/images/arrow-down.svg"
                        alt="arrow"
                        className={"size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500"}
                        width={20}
                        height={20}
                    />
                    {/*<img src="/images/arrow-down.svg" alt="arrow"/>*/}
                </div>
            </div>
        </a>
    )
}
export default Button
