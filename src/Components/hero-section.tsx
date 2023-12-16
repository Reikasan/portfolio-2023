import { Button, Container } from "@mui/material";
import Navigation from "./navigation";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";

const HeroSection = () => {
    const counter = useRef(0);
    const repeatCount = 3;
    return (
        <div className="hero-section">
            <Navigation />
            <Container maxWidth="sm" className="hero-section__container">
                <div className="hero-section__content">
                    <h1 className="hero-section__title">
                        <TypeAnimation
                            sequence={[
                                    'Hello World!\nI am\nReika Akuzawa',
                                    1000,
                                    (el) => {
                                            if (el && counter.current === repeatCount) {
                                                el.classList.remove('custom-type-animation');
                                            } else {
                                                counter.current++;
                                            }
                                    }
                            ]}
                            cursor={false}
                            className="custom-type-animation"
                            speed={10}
                            repeat={repeatCount}
                            style={{ 
                                whiteSpace: 'pre-line', 
                                fontSize: '2em', 
                                fontWeight: 'bold', 
                                fontFamily: 'Josefin Sans',
                            }}
                        />
                    </h1>
                    <p className="hero-section__description">
                        Web Developer based in Berlin.
                    </p>
                    <Button variant="contained" color="primaryButton" className="hero-section__button">Contact Me</Button>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection;