import React from 'react'
import { assets } from '../assets/assets';

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                     <img
                            src={assets.logo}
                            alt="logo"
                            className="w-32 sm:w-44 cursor-pointer"
                            onClick={() => {
                              navigate("/");
                            }}
                          />
                    <p className="mt-6 text-sm">
                       QuickAI is your all-in-one platform for content creation powered by advanced AI. From writing assistance to image generation, our tools streamline your creative workflow. Trusted by creators and professionals, QuickAI brings the power of modern artificial intelligence to your fingertips—enhancing productivity, precision, and performance.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91-9429235513</p>
                            <p>stocklanza11@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 ©  QuickAI. All Right Reserved.
            </p>
        </footer>
    );
};