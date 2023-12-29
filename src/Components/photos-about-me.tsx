import { Box, Modal, Typography } from "@mui/material";
import { aboutMeData } from "../data/about-me-data";
import React from "react";

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
                    <img src={aboutMeData[0].imageSrc} alt={aboutMeData[0].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[0].title}</h4>
                    </div>
                </Box>
                <Box className="grid-item grid2">
                    <img src={aboutMeData[1].imageSrc} alt={aboutMeData[1].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[1].title}</h4>
                    </div>
                </Box>
                <div className="grid-item grid3">
                    <img src={aboutMeData[2].imageSrc} alt={aboutMeData[2].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[2].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid4">
                    <img src={aboutMeData[3].imageSrc} alt={aboutMeData[3].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[3].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid5">
                    <img src={aboutMeData[4].imageSrc} alt={aboutMeData[4].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[4].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid6">
                    <img src={aboutMeData[5].imageSrc} alt={aboutMeData[5].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[5].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid7">
                    <div className="text-content">
                     <h3>10 Things about Me</h3>
                    </div>
                </div>
                <div className="grid-item grid8">
                    <img src={aboutMeData[6].imageSrc} alt={aboutMeData[6].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[6].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid9">
                    <img src={aboutMeData[7].imageSrc} alt={aboutMeData[7].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[7].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid10">
                    <img src={aboutMeData[8].imageSrc} alt={aboutMeData[8].title} />
                    <div className="grid-item__hover-text">
                        <h4>{aboutMeData[8].title}</h4>
                    </div>
                </div>
                <div className="grid-item grid11">
                    <img src={aboutMeData[5].imageSrc} alt={aboutMeData[1].title} />
                </div>
            </div>
        </div>
    )
}

export default PhotosAboutMe;