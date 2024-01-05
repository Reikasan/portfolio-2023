import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { AboutMeProps } from '../../types';

const PhotosAboutMeGridItem:React.FC<AboutMeProps> = ({ aboutMeData }) => {
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