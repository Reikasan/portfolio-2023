import RunningMessage from "../running-message/running-message";
import { Box, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import PhotosAboutMe from "../photo-about-me/photos-about-me";
import lightsImg from "../../assets/images/lights.jpg";
import styles from './styles.module.scss';

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
    right: {xs:'26vw', sm:'33vw'}, 
    top: {xs: '120px', sm: '100px', md: '150px'}, 
    opacity: '0.4', 
    backgroundColor: '#4abea0',
    zIndex: -1, 
}

const about = () => {
    return (
        <section id="about" className={styles.about}>
            <RunningMessage message="about" direction="from-left" />
            <Container maxWidth="md" sx={{paddingTop: {xs: '5vh', sm:'10vh'}, paddingBottom: {xs: '5vh', md:'10vh'}}}>
                <Box sx={{ margin: '0 0 10vh'}}>
                    <Box className={styles.about__text} sx={{width: {xs:'100%', sm:'80%'}, whiteSpace: 'break-spaces'}}>
                        <Box sx={{marginBottom: '3rem'}}>
                            <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon}/>
                            <Typography variant="h3" component="h2" sx={{width: {xs: '100%', sm:'80%'}, marginLeft: '1rem', fontWeight: '100', fontSize: {xs: '2.5em', md:'3em'}}}>
                                How can I change the life a bit better?
                            </Typography>
                        </Box>
                        <p>
                            I constantly ponder on this question. <br/>
                            Even the smallest difference I can make, I believe, has the potential to bring happiness to someone one day.
                        </p>
                    </Box>
                </Box>
                <PhotosAboutMe />
            </Container>
            <Box sx={{height: '300px', position: 'absolute' as 'absolute', top: {xs:'120px', sm:'200px'}, right: 0}}>
                <Box className="about__image" sx={aboutImageStyle}>
                    <img src={lightsImg} alt="lights" />
                </Box>
                <Box sx={aboutBgSqStyle}></Box>
            </Box>
        </section>
    );
}

export default about;