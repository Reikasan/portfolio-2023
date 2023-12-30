import { Box, Modal, Typography } from "@mui/material";
import { aboutMeData } from "../data/about-me-data";
import React from "react";
import PhotosAboutMeGridItem from "./photo-about-me-grid-item";

interface aboutMeData {
    imageSrc: string;
    title: string;
    description: string;
}

const PhotosAboutMe = () => {
    const [open, setOpen] = React.useState(false);
    const [modalNumber, setModalNumber] = React.useState(0);

    const handleOpen = (number:number) =>  {
        setOpen(true);
        setModalNumber(number);
    }
    const handleClose = () => setOpen(false);

    return (
        <div className="photo-about-me">
            <div className="grid">
                <Box className="grid-item grid1" >
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[0]} />
                </Box>
                <Box className="grid-item grid2">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[1]} />
                </Box>
                <Box className="grid-item grid3">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[2]} />
                </Box>
                <Box className="grid-item grid4">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[3]} />
                </Box>
                <Box className="grid-item grid5">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[4]} />
                </Box>
                <Box className="grid-item grid6">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[5]} />
                </Box>
                <Box className="grid-item grid7">
                    <div className="text-content">
                     <h3>10 Things about Me</h3>
                    </div>
                </Box>
                <Box className="grid-item grid8">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[6]} />
                </Box>
                <Box className="grid-item grid9">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[7]} />
                </Box>
                <Box className="grid-item grid10">
                    <PhotosAboutMeGridItem aboutMeData={aboutMeData[8]} />
                </Box>
                <Box className="grid-item grid11">
                    {/* <PhotosAboutMeGridItem aboutMeData={aboutMeData[9]} /> */}
                </Box>
            </div>
        </div>
    )
}

export default PhotosAboutMe;