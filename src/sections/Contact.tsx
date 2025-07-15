'use client'

import React, {useRef, useState} from 'react'
import TitleHeader from "../components/TitleHeader";
// import Button from "../components/Button.jsx";
import ContactExperience from "../components/ContactModels/ContactExperience";
import emailjs from '@emailjs/browser'
import Image from "next/image";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) {
            console.error("Form reference is null");
            return;
        }
        setLoading(true)

try{
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            setFormData({name: '', email: '', message: '',});
            console.log('Form submitted: ', formData)

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }


    }
    return (
        <section id={"contact"} className={"flex-center section-padding"}>
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title={"Get in Touch"} sub={"📧 Contact Us"}/>

                <div className="mt-16 grid-12-cols">
                    {/* Form on the left side (spans 5 columns) */}
                    <div className="xl:col-span-5">

                        <div className="flex-center card-border rounded-xl p-10">


                            <form ref={formRef} onSubmit={handleSubmit} className={"w-full flex flex-col gap-7"}>
                                <p className="text-lg ">
                                    Have a question or want to work together? Feel free to reach out!
                                </p>
                                <div>
                                    <label htmlFor="name" className="block text-white-50 mb-2">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-4 bg-blue-100 rounded-md"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white-50 mb-2">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-4 bg-blue-100 rounded-md"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-white-50 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className="w-full px-4 py-4 bg-blue-100 rounded-md"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div>
                                    <button type={"submit"} className="md:w-80 md:h-16 w-60 h-12" disabled={loading}>
                                        <div className="cta-button group ">
                                            <div className="bg-circle"/>
                                            <p className={"text"}>
                                                {loading ? "Sending..." : " Send Message"}

                                            </p>
                                            <div className="arrow-wrapper">

                                                <Image
                                                    src="/images/arrow-down.svg"
                                                    alt="arrow"
                                                    width={24}  // You can adjust this
                                                    height={24}
                                                    className={"size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500"}
                                                />
                                                {/*<img src="/images/arrow-down.svg" alt="arrow"/>*/}
                                            </div>

                                        </div>


                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* 3D Experience on the right side (spans 7 columns) */}
                    <div className="xl:col-span-7  min-h-96">
                        <div className={"w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden"}>
                            <ContactExperience/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
