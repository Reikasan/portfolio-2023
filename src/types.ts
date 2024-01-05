export interface AboutMeProps {
    aboutMeData: {
        id: number;
        imageSrc: string;
        title: string;
        description: string;
    }    
}

export interface PhotoAboutMeModalProps extends AboutMeProps {
    open: boolean;
    handleClose: () => void;
    handleOpen: (index: number) => () => void;
}

export interface ProjectProps {
    project: {
        imageSrc: string,
        title: string,
        description: string,
        technologies: Array<string>,
        site: string,
        github: string,
    }
}

export interface RunningMessageProps {
    message: string;
    direction: string;
}