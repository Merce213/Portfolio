"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n.config";

const LocaleSwitcher = () => {
    const pathName = usePathname();

    const redirectedPathName = (locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <ul className="flex gap-x-3">
            {i18n.locales.map((locale) => {
                return (
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className="rounded-md border bg-black px-3 py-2 text-white transition-all duration-300 ease hover:bg-red-500 hover:text-black hover:font-bold"
                        >
                            {locale}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default LocaleSwitcher;
