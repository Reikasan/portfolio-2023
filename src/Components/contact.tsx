import { Box, Container, Tooltip, Typography } from "@mui/material";
import kuroNekoImg from "../assets/images/kuro-neko.png";
import pinkNekoImg from "../assets/images/pink-neko.png";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const imgContainerStyle = {
    display: 'flex',
    height: '17vh',
    position: 'absolute' as 'absolute',
    right: '0',
    bottom: '10vh',
}

const contact = () => {
    return (
        <section id="contact" className="contact">
            <Container className="contact__container" maxWidth="md"  sx={{ padding: '0 0 10vh', position: 'relative' as 'relative'}}>
                <Box sx={{ marginBottom: '10vh'}}>
                    <a href="mailto:l06981@googlemail.com" className="contact__mail">
                        <Tooltip title="Mail to me!" arrow>
                            <Typography variant="h1">Contact</Typography>
                        </Tooltip>
                    </a>
                </Box>
                <Box>
                    <h2>Thank you for visiting my portfolio.</h2>
                    <Typography variant="body1">If you have any questions, please feel free to contact me.</Typography>
                    <Typography variant="body1">I am looking forward to hearing from you.</Typography>
                    <p className="contact__message">Have a nice day!</p> 
                    <Box className="neko-img-container" sx={imgContainerStyle}>
                        <img src={kuroNekoImg} alt="kuro-neko" className="contact__img" />
                        <img src={pinkNekoImg} alt="pink-neko" className="contact__img" /> 
                    </Box>
                </Box>
            </Container>
        </section>
    );
}

export default contact;