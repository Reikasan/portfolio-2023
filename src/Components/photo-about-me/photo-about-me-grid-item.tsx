import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface PhotosAboutMeGridItemProps {
    aboutMeData: {
        imageSrc: string;
        title: string;
        description: string;
    }
}

const PhotosAboutMeGridItem:React.FC<PhotosAboutMeGridItemProps> = ({ aboutMeData }) => {
    return (
        <>
            <img src={aboutMeData.imageSrc} alt={aboutMeData.title} />
            <div className={classNames(styles.gridItem__hoverText)}>
                <h4>{aboutMeData.title}</h4>
            </div>
        </>
    )
}

export default PhotosAboutMeGridItem;