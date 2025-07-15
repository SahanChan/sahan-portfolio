import React from 'react'
import {socialImgs} from "../constants/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center">
                    <Link href={"/"}>Visit my blog</Link>

                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className={"icon "} target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} alt="social"/>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center ">
                    <p className={"text-center md:text-end"}>
                        {new Date().getFullYear()} ©️ Sahan | All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
