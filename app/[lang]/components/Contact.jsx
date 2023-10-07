/* eslint-disable react/no-unescaped-entities */
"use client";

const Contact = ({ lang }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            fullname: e.target.fullname.value,
            senderEmail: e.target.senderEmail.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        // data should be required and not empty
        if (
            !data.fullname ||
            !data.senderEmail ||
            !data.subject ||
            !data.message
        ) {
            return;
        }

        await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        e.target.reset();
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
                        onSubmit={handleSubmit}
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="fullname"
                            placeholder={lang.page.contact.placeholder.name}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="senderEmail"
                            placeholder={lang.page.contact.placeholder.email}
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder={lang.page.contact.placeholder.subject}
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder={lang.page.contact.placeholder.message}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
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
