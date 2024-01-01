import { Box, Modal, Typography } from "@mui/material";
import { aboutMeData } from "../data/about-me-data";
import React from "react";
import PhotosAboutMeGridItem from "./photo-about-me-grid-item";
import PhotoAboutMeModal from "./photo-about-me-modal";

interface aboutMeData {
    imageSrc: string;
    title: string;
    description: string;
}

const PhotosAboutMe = () => {
    const [open, setOpen] = React.useState(false);
    const [modalNumber, setModalNumber] = React.useState(0);

    const handleOpen = (index: number) => () => {
        setModalNumber(index);
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return (
        <div className="photo-about-me">
            <div className="grid">
                <Box component="div" className="grid-item grid1" onClick={handleOpen(0)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[0]} />
                </Box>
                <Box className="grid-item grid2" onClick={handleOpen(1)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[1]} />
                </Box>
                <Box className="grid-item grid3" onClick={handleOpen(2)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[2]} />
                </Box>
                <Box className="grid-item grid4" onClick={handleOpen(3)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[3]} />
                </Box>
                <Box className="grid-item grid5" onClick={handleOpen(4)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[4]} />
                </Box>
                <Box className="grid-item grid6" onClick={handleOpen(5)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[5]} />
                </Box>
                <Box className="grid-item grid7">
                    <div className="text-content">
                     <h3>10 Things about Me</h3>
                    </div>
                </Box>
                <Box className="grid-item grid8" onClick={handleOpen(6)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[6]} />
                </Box>
                <Box className="grid-item grid9" onClick={handleOpen(7)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[7]} />
                </Box>
                <Box className="grid-item grid10" onClick={handleOpen(8)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[8]} />
                </Box>
                <Box className="grid-item grid11" onClick={handleOpen(9)}>
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[9]} />
                </Box>
            </div>
            <PhotoAboutMeModal open={open} photoAboutMeData={aboutMeData[modalNumber]} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
    )
}

export default PhotosAboutMe;