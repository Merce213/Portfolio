import Nav from "./components/Nav";
import Providers from "./components/Providers";
import "./globals.css";
import "./cyberpunk.css";
import { getDictionary } from "@/lib/dictionaries";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Portfolio | Nassim",
    description:
        "My portfolio website, where u can find my projects and contact me.",
};

export default async function RootLayout({ children, params }) {
    // console.log(params, "params");

    const lang = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
            <body>
                <Providers>
                    <Nav lang={lang} />
                    <main className="w-full min-h-screen bg-black-pearl">
                        {children}
                    </main>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
