import React from "react";
import Logo from "../assets/logo.png";
import EmailIcon from "../assets/icons/EmailIcon";

function Footer() {
    return (
        <div className="bg-black text-white text-xl grid grid-cols-2 md:grid-cols-5 px-6 sm:px-10 py-20">
            <div className="col-span-2 md:col-span-3 space-y-10 flex flex-col items-center md:items-start">
                <img src={Logo} alt="logo" className="h-[40px]" />
                <p className="w-8/12 text-center md:text-left">Dsgnr. is an award winning creative and design agency 
                based in New York, USA.</p>
                <div className="border-2 border-yellow-primary grid grid-cols-4 p-4 w-60">
                    <EmailIcon />
                    <p className="font-bold col-span-3">info@dsgnr.com</p>
                </div>
                <div className="flex space-x-10">
                    <a href="#" target="_blank" rel="noreferrer">Privacy Policy</a>
                    <a href="#" target="_blank" rel="noreferrer">Terms</a>
                </div>
            </div>
            <div className="mt-8 text-center md:text-left pr-2 md:pr-0">
                <h2 className="font-bold">What We Do</h2>
                <ul className="mt-6 space-y-1">
                    <li>Intro</li>
                    <li>Home</li>
                    <li>Work</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="mt-8 text-center md:text-left pl-2 md:pl-0">
                <h2 className="font-bold">Who We Are</h2>
                <ul className="mt-6 space-y-1">
                    <li>About</li>
                    <li>News</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;