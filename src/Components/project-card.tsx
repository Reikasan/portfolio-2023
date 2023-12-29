import { Grid, Button, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

type projectProps = {
    project: {
        imageSrc: string,
        title: string,
        description: string,
        technologies: Array<string>,
        site: string,
        github: string,
    },
}

const ProjectCard: React.FC<projectProps> = ({project}) => {
    return (
        <Paper elevation={3} sx={{marginBottom: '50px', padding: '40px', position: 'relative'}} className="project-card">
            <Grid container spacing={5}>
                <Grid item md={7} xs={12} className="project-card__image">
                    <img src={project.imageSrc} alt={project.title} />
                </Grid>
                <Grid item md={5} xs={12} className="project-card__content">
                    <Typography variant="h4" component="h3" sx={{ fontFamily: "Poppins"}}>{project.title}</Typography>
                    <p>{project.description}</p>
                    <ul className="project-card__content--tech-list">
                        {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                    <div className="project-card__links">
                        {project.site ? 
                        <Button className="project-link" variant="outlined" href={project.site} target="_blank" rel="noopener noreferrer">
                            Go Site<LaunchIcon fontSize="small"/>
                        </Button>
                        : <div>
                            <Button className="project-link" variant="outlined" disabled>Go Site</Button>
                            <div className="under-construction-label">Sorry!<br/>It's under construction</div>
                        </div>
                        }
                        { project.github &&
                        <Button className="project-link" variant="outlined" href={project.github} target="_blank" rel="noopener noreferrer">
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