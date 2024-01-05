import { Button, Container } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";
import { Link as Scroll } from 'react-scroll';
import styles from './styles.module.scss'

const HeroSection = () => {
    const counter = useRef(0);
    const repeatCount = 3;
    return (
        <div className={styles.heroSection}>
            <Container maxWidth="sm" className={styles.heroSection__container}>
                <div className={styles.heroSection__content}>
                    <h1 className={styles.heroSection__title}>
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
                            className={styles.customTypeAnimation}
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
                    <p className={styles.heroSection__description}>
                        Web Developer based in Berlin.
                    </p>
                    <Scroll 
                      to={`${'contact'}`}
                      offset={-64}
                      smooth
                      spy
                    >
                        <Button variant="contained" color="primaryButton" className={styles.heroSection__button}>Contact Me</Button>
                    </Scroll>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection;