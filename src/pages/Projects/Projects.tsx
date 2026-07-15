import { useState } from 'react'
import './Projects.css'
import { projects, type Project } from '../../data/projects'
import ProjectModal from '../../components/ProjectModal/ProjectModal'


function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const openModal = (project: Project) => setSelectedProject(project)
    const closeModal = () => setSelectedProject(null)

    return (
        <section className="projects section-padding" id="projects">
            <div className="projects-inner section-inner">
                <p className="section-eyebrow">Projects</p>
                <h2 className="section-title">Things I've built.</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            className="project-card"
                            key={project.title}
                            onClick={() => openModal(project)}
                        >
                            <div className="project-card-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className={`project-status status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {project.status}
                                </span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={selectedProject !== null}
                onClose={closeModal}
            />
        </section>
    )
}

export default Projects