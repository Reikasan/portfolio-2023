import {Box, Modal, Paper, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './styles.module.scss';
import { PhotoAboutMeModalProps } from '../../types';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '80vw', sm: '400px'},
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: {xs: 2, sm: 4},
    overflow: 'scroll' as 'scroll',
    outline: 'none',
};

const closeIconStyle = {
    width: {md: '1.5rem', lg:'2rem'},
    height: {md: '1.5rem', lg:'2rem'},
    backgroundColor: 'primary.main',
    position: 'absolute' as 'absolute',
    borderRadius: '50%',
    top: {xs: '.5rem', sm: '1rem'},
    right: {xs: '.5rem', sm: '1rem'},
    color: '#fff',
    cursor: 'pointer',
}

const titleStyle = {
    textTransform: 'uppercase',
    lineHeight: {xs: '2rem', sm: '2.5rem'},
    margin: {xs: '1rem 0', sm: '2rem 0'},
    textAlign: 'center' as 'center',
    fontWeight: 100,
    fontSize: {xs: '2rem', sm: '3rem'},
}

const photoAboutMeModal: React.FC<PhotoAboutMeModalProps> = ({open, aboutMeData, handleOpen, handleClose }) => {
    const previousId = aboutMeData.id - 2;
    const nextId = aboutMeData.id;

    return (
        <div>
           <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="about-me-modal-title"
                aria-describedby="about-me-modal-description"
            >
                <Paper sx={modalStyle} className={styles.modal}>
                    <CloseIcon onClick={handleClose} className="close-icon" sx={closeIconStyle}/>
                    <Box className="image-container" sx={{ height: "30%" }}>
                        <img src={aboutMeData.imageSrc} alt={aboutMeData.title} />
                    </Box>
                    <Box sx={{ margin: '0 1rem'}}>
                        <Typography id="about-me-modal-title" variant="h3" component="h3" sx={titleStyle}>
                            {aboutMeData.title}
                        </Typography>
                        <Typography id="about-me-modal-description" sx={{ mt: 2 }}>
                            {aboutMeData.description}
                        </Typography>
                    </Box>
                    <Box sx={{ position: 'relative' as 'relative', marginTop: '2rem', color: '#aaa', height: '2rem'}}>
                        { aboutMeData.id !== 1 && ( 
                        <Box sx={{
                                position: 'absolute' as 'absolute',
                                bottom: '0',
                                left: '0',
                                display: 'flex', 
                                cursor: 'pointer', 
                                gap: '5px', 
                                alignItems: 'center' 
                            }} onClick={handleOpen(previousId)}>
                            <ArrowBackIcon />
                            <Typography variant="overline" component="p" sx={{ mt: 1}}>
                                prev
                            </Typography>
                        </Box>
                        )}
                        { aboutMeData.id !== 10 && (
                        <Box sx={{
                                position: 'absolute' as 'absolute',
                                bottom: '0',
                                right: '0',
                                display: 'flex', 
                                cursor: 'pointer', 
                                gap: '5px', 
                                alignItems: 'center' 
                            }}
                            onClick={handleOpen(nextId)}>
                            <Typography variant="overline" component="p" sx={{ mt: 1}}>
                                next
                            </Typography>
                            <ArrowForwardIcon />
                        </Box>
                        )}
                    </Box>
                </Paper>
            </Modal> 
        </div>
    )
}

export default photoAboutMeModal;