import RunningMessage from "./running-message";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import PhotosAboutMe from "./photos-about-me";

const about = () => {
    return (
        <section id="about" className="about">
            <RunningMessage message="about" direction="from-left" />
            <Container maxWidth="md"  
                    sx={{
                        padding: '5vh 0 5vh 0',
                    }}>
                    <div className="about__text">
                        <h2>Hello, I am Reika
                        <FontAwesomeIcon icon={(faHand)} />
                        </h2>
                        <p>
                            Since 2018 I started learning programming. I am a web developer based in Berlin.
                            I have experience in building web applications with React and Node.js.
                            I am currently looking for a job as a Frontend Developer.
                        </p>
                    </div>
                    <PhotosAboutMe />
                </Container>
            </section>
    );
}

export default about;