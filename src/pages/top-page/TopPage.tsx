// import { useEffect, useState } from "react";
import Navigation from "../../Components/navigation";
import HeroSection from "../../Components/hero-section";
import Projects from "../../Components/projects";
import About from "../../Components/about";
import Contact from "../../Components/contact";


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