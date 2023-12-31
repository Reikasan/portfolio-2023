import {Box, Button, Container, Tooltip, Typography, Link } from "@mui/material";
import kuroNekoImg from "../../assets/images/kuro-neko.png";
import pinkNekoImg from "../../assets/images/pink-neko.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';

const imgContainerStyle = {
    display: 'flex',
    height: {xs: '20vw', md: '17vh'},
    position: 'absolute' as 'absolute',
    right: '2rem',
    bottom: '10vh',
}

const mailMeButtonStyle = {
    // display: {xs: 'block', sm: 'none'},
    width: '50vw',
    marginBottom: '2rem',
    // borderRadius: '0px',
    border: '2px solid #252422',
    padding: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as 'center',
    '&:hover': {
        backgroundColor: '#252422',
        color: '#ED217C',
        border: '2px solid #252422',
    }

}

const contact = () => {
    return (
        <section id="contact" className={ styles.contact}>
            <Container className={ styles.contact__container} maxWidth="md"  sx={{ paddingBottom: '10vh', position: 'relative' as 'relative'}}>
                <Box sx={{ marginBottom: {md: '5vh', lg:'10vh'}}}>
                    <a href="mailto:l06981@googlemail.com" className={ styles.contact__mail}>
                        <Tooltip title="Mail to me!" arrow>
                            <Typography variant="h1">Contact</Typography>
                        </Tooltip>
                    </a>
                </Box>
                <Box>
                    <h2>Thank you for visiting my portfolio.</h2>
                    <Box sx={{display: {xs:'flex', sm: 'none'}, justifyContent: 'center', paddingTop: '1rem'}}>
                        <Button variant="outlined" color="secondaryButton" href="mailto:l06981@googlemail.com" sx={mailMeButtonStyle}>
                            Mail To Me!
                        </Button>
                    </Box>
                    <Typography variant="body1">If you have any questions, interests or anything, please feel free to contact me.</Typography>
                    <Typography variant="body1">I am looking forward to hearing from you.</Typography>
                    <Box>
                        <Typography variant="h5" sx={{margin: '2rem 0 1rem'}}>Also check!</Typography>
                        <Box sx={{display: 'flex', gap: {xs: '1rem', md:'2rem' }}}>
                            <Link color="inherit" href="https://github.com/Reikasan" target="_blank" rel="noopener noreferrer" className={styles.contact__link}>
                                <GitHubIcon/>
                            </Link>
                            <Link color="inherit" href="https://codepen.io/reikasan" target="_blank" rel="noopener noreferrer" className={styles.contact__link}>
                                <FontAwesomeIcon icon={faCodepen} />
                            </Link>
                            <Link color="inherit" href="https://www.linkedin.com/in/reika-akuzawa-8271b7242/" target="_blank" rel="noopener noreferrer" className={styles.contact__link}>
                                <LinkedInIcon/>
                            </Link>
                        </Box>
                    </Box>
                    <Box className="neko-img-container" sx={imgContainerStyle}>
                        <img src={kuroNekoImg} alt="kuro-neko" className={styles.contact__img} />
                        <img src={pinkNekoImg} alt="pink-neko" className={styles.contact__img} /> 
                    </Box>
                </Box>
            </Container>
        </section>
    );
}

export default contact;