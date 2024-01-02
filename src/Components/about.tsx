import RunningMessage from "./running-message";
import { Box, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import PhotosAboutMe from "./photos-about-me";
import lightsImg from "../assets/images/lights.jpg";

const aboutImageStyle = {
    width: '40vw', 
    height: '220px', 
    position: 'absolute' as 'absolute', 
    right: 0, 
    top: 0, 
    opacity: '0.4', 
    overflow: 'hidden',
    zIndex: -1,
}

const aboutBgSqStyle = {
    width: '150px', 
    height: '150px', 
    position: 'absolute' as 'absolute', 
    right: '33vw', 
    bottom: 0, 
    opacity: '0.4', 
    backgroundColor: '#4abea0',
    zIndex: -1, 
}

const about = () => {
    return (
        <section id="about" className="about">
            <RunningMessage message="about" direction="from-left" />
            <Container maxWidth="md" sx={{padding: '10vh 0'}}>
                <Box sx={{ margin: '0 0 10vh', height: '300px'}}>
                    <Box className="about__text" sx={{width: '80%'}}>
                        <Box sx={{marginBottom: '3rem'}}>
                            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon"/>
                            <Typography variant="h3" component="h2" sx={{width: '80%', marginLeft: '1rem', fontWeight: '100'}}>
                                How can I change the life a bit better?
                            </Typography>
                        </Box>
                        <p>
                            I always think about it.<br/>
                            The difference, what I can make could be a small , but I believe one day it can make someone happy.
                        </p>
                    </Box>
                    
                </Box>
                <PhotosAboutMe />
            </Container>
            <Box sx={{height: '300px', position: 'absolute' as 'absolute', top: '200px', right: 0}}>
                <Box className="about__image" sx={aboutImageStyle}>
                    <img src={lightsImg} alt="lights" />
                </Box>
                <Box sx={aboutBgSqStyle}></Box>
            </Box>
        </section>
    );
}

export default about;