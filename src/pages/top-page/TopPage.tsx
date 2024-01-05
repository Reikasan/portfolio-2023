import Navigation from "../../Components/navigation/navigation";
import HeroSection from "../../Components/hero-section";
import Projects from "../../Components/project/projects";
import About from "../../Components/about/about";
import Contact from "../../Components/contact/contact";


const TopPage = () => {
    return (
        <div>
            <Navigation />
            <HeroSection />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default TopPage;