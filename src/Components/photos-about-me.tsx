import React from "react";
import { Box } from "@mui/material";
import { aboutMeData } from "../data/about-me-data";
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
            <div className="grid grid-container">
                <div className="grid grid-1">
                    <Box component="div" className="grid-item grid-item-1" onClick={handleOpen(0)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[0]} />
                    </Box>
                    <Box className="grid-item grid-item-2" onClick={handleOpen(1)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[1]} />
                    </Box>
                    <Box className="grid-item title mobile">
                        <div className="text-content">
                            <h3>10 Things about Me</h3>
                        </div>
                    </Box>
                    <Box className="grid-item grid-item-3" onClick={handleOpen(2)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[2]} />
                    </Box>
                    <Box className="grid-item grid-item-4" onClick={handleOpen(3)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[3]} />
                    </Box>
                    <Box className="grid-item grid-item-5" onClick={handleOpen(4)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[4]} />
                    </Box>
                </div>
                <div className="grid grid-2">
                    <Box className="grid-item grid-item-6" onClick={handleOpen(5)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[5]} />
                    </Box>
                    <Box className="grid-item grid-item-7 title">
                        <div className="text-content">
                            <h3>10 Things about Me</h3>
                        </div>
                    </Box>
                </div>
            {/* </div>
            <div className="grid grid-container"> */}
                <div className="grid grid-3">
                    <Box className="grid-item grid-item-8" onClick={handleOpen(6)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[6]} />
                    </Box>
                </div>
                <div className="grid grid-4">
                    <Box className="grid-item grid-item-9" onClick={handleOpen(7)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[7]} />
                    </Box>
                    <Box className="grid-item grid-item-10" onClick={handleOpen(8)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[8]} />
                    </Box>
                    <Box className="grid-item grid-item-11" onClick={handleOpen(9)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[9]} />
                    </Box>
                </div>
            </div>
            <PhotoAboutMeModal open={open} photoAboutMeData={aboutMeData[modalNumber]} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
    )
}

export default PhotosAboutMe;