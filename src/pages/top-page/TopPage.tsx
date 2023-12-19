// import { useEffect, useState } from "react";
import HeroSection from "../../Components/hero-section";
import { Container } from "@mui/material";
import RunningMessage from "../../Components/running-message";

const TopPage = () => {
    return (
        <div>
            <HeroSection />
            <section id="about">
                <RunningMessage message="about" direction="from-right" />
                <Container maxWidth="sm" >
                    <div className="hello">Hello</div>
                </Container>
                <RunningMessage message="reika" direction="from-left" />

            </section>
        </div>
    )
}

export default TopPage;