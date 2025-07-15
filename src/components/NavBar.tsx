'use client'

import React, {useEffect, useState} from 'react'
import {navLinks, NavLink} from "../constants/constants";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Sahan
                </a>

                <nav className={"desktop"}>

                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className={"contact-btn group"}>
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}
export default NavBar
