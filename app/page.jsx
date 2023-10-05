import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";

const page = () => {
    return (
        <>
            <Home />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default page;
