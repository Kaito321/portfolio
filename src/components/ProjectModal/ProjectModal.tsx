import Modal from '../Modal/Modal'
import './ProjectModal.css'
import { type Project } from '../../data/projects'

type ProjectModalProps = {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="project-modal">
                <div className="project-modal-header">
                    <h2 className="project-modal-title">{project.title}</h2>
                    <span className={`project-status status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {project.status}
                    </span>
                </div>

                <p className="project-modal-description">
                    {project.fullDescription || project.description}
                </p>

                {project.architecture && (
                    <div className="project-modal-section">
                        <h3 className="project-modal-section-title">Architecture</h3>
                        <p className="project-modal-section-text">{project.architecture}</p>
                    </div>
                )}

                {project.techDetails && (
                    <div className="project-modal-section">
                        <h3 className="project-modal-section-title">How it's built</h3>
                        <p className="project-modal-section-text">{project.techDetails}</p>
                    </div>
                )}

                <div className="project-modal-section">
                    <h3 className="project-modal-section-title">Tech stack</h3>
                    <div className="project-modal-tags">
                        {project.tags.map((tag) => (
                            <span className="project-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                {(project.repoUrl || project.liveUrl) && (
                    <div className="project-modal-links">
                        {project.liveUrl && (

                            <a href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-modal-link project-modal-link-primary"
                            >
                            View Live →
                            </a>
                            )}
                        {project.repoUrl && (

                            <a href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-modal-link"
                            >
                            View Repository →
                            </a>
                            )}
                    </div>
                )}
</div>
</Modal>
)
}

export default ProjectModal