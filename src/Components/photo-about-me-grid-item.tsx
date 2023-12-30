import React from 'react';
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
            <div className="grid-item__hover-text">
                <h4>{aboutMeData.title}</h4>
            </div>
        </>
    )
}

export default PhotosAboutMeGridItem;