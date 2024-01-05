import React from "react";
import { Box } from "@mui/material";
import { aboutMeData } from "../../data/about-me-data";
import PhotosAboutMeGridItem from "./photo-about-me-grid-item";
import PhotoAboutMeModal from "./photo-about-me-modal";
import classNames from "classnames";
import styles from './styles.module.scss';

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
        <div className={styles.photoAboutMe}>
            <div className={classNames(styles.grid, styles.gridContainer)}>
                <div className={classNames(styles.grid, styles.grid1)}>
                    <Box component="div" className={classNames(styles.gridItem, styles.gridItem1)} onClick={handleOpen(0)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[0]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem2)} onClick={handleOpen(1)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[1]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.title, styles.mobile)}>
                        <div className={styles.textConten}>
                            <h3>10 Things about Me</h3>
                        </div>
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem3)} onClick={handleOpen(2)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[2]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem4)} onClick={handleOpen(3)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[3]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem5)} onClick={handleOpen(4)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[4]} />
                    </Box>
                </div>
                <div className={classNames(styles.grid, styles.grid2)}>
                    <Box className={classNames(styles.gridItem, styles.gridItem6)} onClick={handleOpen(5)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[5]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem7, styles.title)}>
                        <div className="text-content">
                            <h3>10 Things about Me</h3>
                        </div>
                    </Box>
                </div>
                <div className={classNames(styles.grid, styles.grid3)}>
                    <Box className={classNames(styles.gridItem, styles.gridItem8)} onClick={handleOpen(6)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[6]} />
                    </Box>
                </div>
                <div className={classNames(styles.grid, styles.grid4)}>
                    <Box className={classNames(styles.gridItem, styles.gridItem9)} onClick={handleOpen(7)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[7]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem10)} onClick={handleOpen(8)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[8]} />
                    </Box>
                    <Box className={classNames(styles.gridItem, styles.gridItem11)} onClick={handleOpen(9)}>
                        <PhotosAboutMeGridItem aboutMeData={aboutMeData[9]} />
                    </Box>
                </div>
            </div>
            <PhotoAboutMeModal open={open} photoAboutMeData={aboutMeData[modalNumber]} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
    )
}

export default PhotosAboutMe;