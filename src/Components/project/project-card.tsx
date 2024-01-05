import { Grid, Button, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styles from "./styles.module.scss";
import { ProjectProps } from "../../types";

const projectCardStyle = {
    marginBottom: '50px', 
    padding: {xs: '20px', sm: '40px'}, 
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
}

const ProjectCard: React.FC<ProjectProps> = ({project}) => {
    return (
        <Paper elevation={3} sx={projectCardStyle} className="projectCard">
            <Grid container spacing={{xs: 3, md: 5}}>
                <Grid item md={7} xs={12} className={styles.projectCard__image}>
                    <img src={project.imageSrc} alt={project.title} />
                </Grid>
                <Grid item md={5} xs={12} className={styles.projectCard__content}>
                    <Typography variant="h4" component="h3" sx={{ fontFamily: "Poppins", marginBottom: '2rem'}}>
                        {project.title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {project.description}
                    </Typography>
                    <ul className={styles.projectCard__contentTechList}>
                        {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                    <div className={styles.projectCard__links}>
                        {project.site ? 
                        <Button className={styles.projectLink} variant="outlined" href={project.site} target="_blank" rel="noopener noreferrer">
                            Go Site<LaunchIcon fontSize="small"/>
                        </Button>
                        : <div>
                            <Button className={styles.projectLink} variant="outlined" disabled>Go Site</Button>
                            <div className={styles.underConstructionLabel}>Sorry!<br/>It's under construction</div>
                        </div>
                        }
                        { project.github &&
                        <Button className={styles.projectLink} variant="outlined" href={project.github} target="_blank" rel="noopener noreferrer">
                            Github<GitHubIcon fontSize="small" />
                        </Button>
                        }
                    </div>
                </Grid>
            </Grid>
        </Paper>
        
    )
}

export default ProjectCard;