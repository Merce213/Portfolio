import { getDictionary } from "@/lib/dictionaries";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";

const page = async ({ params }) => {
    const lang = await getDictionary(params.lang);

    // console.log(lang, "params home");

    return (
        <>
            <Home lang={lang} />
            <AboutMe lang={lang} />
            <Projects lang={lang} />
            <Contact lang={lang} />
            <Footer />
        </>
    );
};

export default page;
