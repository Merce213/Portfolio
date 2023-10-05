/* eslint-disable react/no-unescaped-entities */
import React from "react";

const AboutMe = () => {
    return (
        <section name="about-me" className="h-[100dvh] w-full">
            <div className="h-full w-full flex flex-col justify-center md:gap-20 pt-12 sm:p-0">
                <div>
                    <div className="cyber-banner-short bg-red max-w-3xl rotate-180 inline-flex float-right">
                        <p className="rotate-180 w-full text-[#101010] oxanium-font">
                            About Me
                        </p>
                    </div>
                </div>

                <svg
                    viewBox="0 0 1.609 1.609"
                    fill="currentColor"
                    className="text-red-500 animate-pulse h-48 w-full cyber-glitch-4"
                >
                    <path d="M 0.618 0.402 L 0.764 0.805 L 0.599 0.805 L 0.762 1.204 L 0.979 1.199 L 0.847 0.942 L 1.019 0.942 L 0.618 0.402" />
                </svg>

                <div className="flex justify-center items-center px-6 max-w-6xl mx-auto drop-shadow-[0_7px_25px_rgba(228,26,53,0.86)] pt-7">
                    <div className="cyber-tile-big border-2 border-red-500 bg-red-950 p-4">
                        <p className="text-slate-100 text-xl">
                            I've been a keen internet user since I was a child.
                            My curiosity about how websites functioned led me to
                            explore web development. I took a 10
                            <span className="cyber-glitch-3">-</span>month
                            course at Web@cadémie by Epitech, where I acquired
                            the fundamentals. Now, I'm eager to continue my
                            learning journey through a new apprenticeship
                            program, aiming to earn a degree or seize an
                            opportunity with an open-minded company that
                            welcomes junior developers with no prior experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
