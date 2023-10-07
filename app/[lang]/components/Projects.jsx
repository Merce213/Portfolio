/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { client } from "../lib/sanity";
import Link from "next/link";

const getProjects = async () => {
    const query = `*[_type == "project"] {
        _id,
        title,
        overview,
        link,
        "imageUrl": image.asset->url,
    }`;

    const data = await client.fetch(query);

    return data;
};

const Projects = async ({ lang }) => {
    const data = await getProjects();

    return (
        <section name="projects" className="md:min-h-[100dvh] w-full">
            <div className="h-full w-full flex flex-col justify-center pt-20 pb-5 gap-4">
                <div className="flex flex-col gap-8">
                    <div className="cyber-banner-short bg-red max-w-3xl float-left">
                        <p className="w-full text-[#101010] oxanium-font">
                            {lang.page.projects.title}
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto px-6 w-full">
                        <p className="text-slate-100 text-left">
                            {lang.page.projects.description}
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                    {data.map((project) => (
                        <article
                            key={project._id}
                            className="overflow-hidden rounded-lg border border-gray-100 bg-rose-900 shadow-lg shadow-red-400"
                        >
                            <div className="h-56 w-full relative">
                                <Image
                                    fill
                                    src={project.imageUrl}
                                    alt="Image of the project"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-4 sm:p-6">
                                <Link href={project.link} target="_blank">
                                    <h3 className="text-lg font-medium text-slate-100 oxanium-font">
                                        {project.title}
                                    </h3>
                                </Link>

                                <p className="line-clamp-4 mt-2 text-sm leading-relaxed text-slate-100">
                                    {project.overview}
                                </p>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-300"
                                >
                                    Learn More!
                                    <span className="block transition-all group-hover:ms-0.5">
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
