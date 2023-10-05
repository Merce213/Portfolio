import Image from "next/image";
import avatar from "../../public/avatar_cyberpunk.jpeg";

const Home = () => {
    return (
        <section name="home" className="h-[100dvh] w-full relative">
            <div className="absolute inset-0 bg-black opacity-60 z-10 h-full" />
            <video
                src="/videos/cyberpunk_city_night.mp4"
                autoPlay
                loop
                muted
                className="h-[100dvh] w-full object-cover z-0 hue-rotate-90"
            />
            <div className="absolute inset-0 z-20">
                <div className="flex flex-col md:flex-row gap-2 md:gap-8 px-6 max-w-6xl mx-auto items-center justify-center h-full pt-10 sm:pt-0">
                    <div className="drop-shadow-[0_7px_25px_rgba(228,26,53,0.86)]">
                        <div className="cyber-tile animate-appearance-in border-2 border-red-500 text-slate-100 font-bold bg-red-950 flex flex-col justify-center gap-4 items-center p-1 sm:px-4 sm:pt-5">
                            <div className="cyber-glitch-1 h-24 w-24 md:h-40 md:w-40 rounded-full object-cover object-top border-2 border-red-500 shadow-[0_7px_25px_rgba(228,26,53,0.86)]">
                                <Image
                                    fill
                                    src={avatar}
                                    alt="avatar"
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="md:pt-4 md:pb-2 text-lg md:text-2xl font-bold leading-8 tracking-tight">
                                Nassim
                            </h3>
                            <p className="text-slate-100 text-center oxanium-font">
                                Hey my name is Nassim and I am a Full Stack
                                Developer
                            </p>

                            <div className="flex space-x-5 md:pt-6">
                                <a
                                    href="https://github.com/Merce213"
                                    target="_blank"
                                >
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        className="w-8 h-8 text-cyan-400 hover:text-cyan-500 transition-all duration-300 ease hover:scale-125"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nassim-boulghib"
                                    target="_blank"
                                >
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        className="w-8 h-8 text-cyan-400 hover:text-cyan-500 transition-all duration-300 ease hover:scale-125"
                                    >
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:nassim-bgb69@gmx.fr"
                                    target="_blank"
                                >
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        className="w-8 h-8 text-cyan-400 hover:text-cyan-500 transition-all duration-300 ease hover:scale-125"
                                    >
                                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
                                    </svg>
                                </a>
                                <a href="" target="_blank">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        className="w-8 h-8 text-cyan-400 hover:text-cyan-500 transition-all duration-300 ease hover:scale-125"
                                    >
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="drop-shadow-[0_7px_25px_rgba(228,26,53,0.86)]">
                        <div className="cyber-tile-big animate-appearance-in border-2 border-red-500 text-slate-100 font-bold bg-red-950 flex flex-col justify-center gap-4 items-center px-4 pt-5">
                            <p>
                                Hey everyone my name is Nassim, I am 21 years
                                old. I am a Full Stack developer based in Lyon,
                                France.
                            </p>
                            <p>
                                I have a passion for building Full Stack
                                applications with React and enjoy working on
                                personal projects, even if they are not always
                                completed. I find it fulfilling to embark on
                                these personal ventures as they provide valuable
                                learning experiences.
                            </p>
                            <p>
                                Developing applications and exploring personal
                                projects for the sake of learning is the perfect
                                combination of creative expression, technical
                                expertise, and personal growth for me. I am
                                excited to continue this journey and refine my
                                skills
                                <span className="cyber-glitch-3">.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
