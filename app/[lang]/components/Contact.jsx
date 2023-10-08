/* eslint-disable react/no-unescaped-entities */
"use client";

import { useForm } from "react-hook-form";

const Contact = ({ lang }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        reset();
    };

    return (
        <section name="contact" className="h-[100dvh] w-full">
            <div className="h-full w-full flex flex-col justify-center pt-20 pb-5">
                <div>
                    <div className="cyber-banner-short bg-red max-w-3xl rotate-180 inline-flex float-right">
                        <p className="rotate-180 w-full text-[#101010] oxanium-font">
                            Contact
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

                <div className="flex justify-center items-center px-6">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-full md:w-1/2"
                    >
                        {errors.fullname?.type === "required" && (
                            <span className="text-red-500">
                                {lang.page.contact.errors.name}
                            </span>
                        )}
                        <input
                            type="text"
                            name="fullname"
                            placeholder={lang.page.contact.placeholder.name}
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            {...register("fullname", { required: true })}
                        />

                        {errors.senderEmail?.type === "required" && (
                            <span className="text-red-500">
                                {lang.page.contact.errors.email}
                            </span>
                        )}
                        {errors.senderEmail?.type === "pattern" && (
                            <span className="text-red-500">
                                {lang.page.contact.errors.emailFormat}
                            </span>
                        )}
                        <input
                            type="email"
                            name="senderEmail"
                            placeholder={lang.page.contact.placeholder.email}
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            {...register("senderEmail", {
                                required: true,
                                pattern: /^\S+@\S+\.\S+$/i,
                            })}
                        />

                        {errors.subject?.type === "required" && (
                            <span className="text-red-500">
                                {lang.page.contact.errors.subject}
                            </span>
                        )}
                        <input
                            type="text"
                            name="subject"
                            placeholder={lang.page.contact.placeholder.subject}
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                            {...register("subject", { required: true })}
                        />

                        {errors.message && (
                            <span className="text-red-500">
                                {lang.page.contact.errors.message}
                            </span>
                        )}
                        <textarea
                            name="message"
                            rows="10"
                            placeholder={lang.page.contact.placeholder.message}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
                            {...register("message", { required: true })}
                        ></textarea>

                        <button
                            type="submit"
                            className="text-white bg-gradient-to-b from-cyan-300 to-teal-700 px-6 py-3 mt-3 mx-auto flex items-center rounded-md hover:scale-110 hover:from-rose-400 hover:to-red-600 hover:text-[#101010] duration-300"
                        >
                            {lang.page.contact.button}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
