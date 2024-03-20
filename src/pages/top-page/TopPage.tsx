import Navigation from "../../Components/navigation/navigation";
import HeroSection from "../../Components/hero-section/hero-section";
import Projects from "../../Components/project/projects";
import About from "../../Components/about/about";
import Contact from "../../Components/contact/contact";
// import CustomCursor from "../../Components/cursor/cursor";
import { useState} from "react";

const TopPage = () => {
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            // onMouseEnter = {() => setIsHovered(true)}
            // onMouseLeave = {() => setIsHovered(false)}
        >

            {/* <CustomCursor isHovered={isHovered}/> */}
            <Navigation />
            <HeroSection />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default TopPage;