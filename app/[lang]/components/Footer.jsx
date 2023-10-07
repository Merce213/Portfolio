import React from "react";
import LocaleSwitcher from "./locale-switcher";

const Footer = () => {
    return (
        <footer className="relative pt-20 h-28">
            <div className="cyber-razor-top bg-black bottom-0 left-0 w-full py-4 text-white">
                <div className="max-w-6xl mx-auto px-6 flex flex-row items-center">
                    <div className="w-full items-center flex justify-between">
                        <div className="flex flex-row justify-center flex-grow">
                            <p className="">© Copyright Merce 2023</p>
                        </div>
                        <div className="flex flex-row justify-end">
                            <LocaleSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
