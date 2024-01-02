import RunningMessage from "./running-message";
import { Container } from "@mui/material";
import ProjectCard from "./project-card";
import { projectsData }  from "../data/projects-data";  

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <RunningMessage message="project" direction="from-right" />
                <Container maxWidth="md"  
                    sx={{
                        padding: '10vh 0 10vh',
                    }}>
                    <div className="projects__container">
                        {projectsData.map((project, index)  => (
                            <ProjectCard 
                                project={project}
                                key={index}
                            />
                        ))}
                    </div>
                </Container>
        </section>
    )
}

export default Projects;