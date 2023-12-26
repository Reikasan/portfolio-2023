import RunningMessage from "./running-message";
import { Button, Container, Link } from "@mui/material";
import ProjectCard from "./project-card";
import { projectsData, codePenData } from "../data/projects-data";  
import GitHubIcon from '@mui/icons-material/GitHub';


const Projects = () => {
    return (
        <section id="projects">
            <RunningMessage message="project" direction="from-right" />
                <Container maxWidth="md"  
                    sx={{
                        padding: '10vh 0 5vh 0',
                    }}>
                    <div className="projects-container">
                        {projectsData.map((project, index)  => (
                            <ProjectCard 
                                project={project}
                                key={index}
                            />
                        ))}
                    </div>
                    {/* <div className="codepen-container">
                        {codePenData.map((codepen, index) => (
                            <ProjectCard 
                                codepen={codepen}
                                key={index}
                            />
                        ))};
                    </div>                     */}
                    <Link href="https://github.com/Reikasan" target="_blank" rel="noopener noreferrer">
                        More<GitHubIcon fontSize="small" />
                    </Link>
                </Container>
            <RunningMessage message="about" direction="from-left" />
        </section>
    )
}

export default Projects;