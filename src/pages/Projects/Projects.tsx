import './Projects.css'

const projects = [
    {
        title: 'Portfolio Website',
        description:
            'A full stack personal portfolio built with React, TypeScript, and Vite. Deployed on AWS with CI/CD via GitHub Actions. Features AI integration and a clean, responsive design.',
        tags: ['React', 'TypeScript', 'AWS', 'Docker', 'CI/CD'],
        status: 'In Progress',
        link: '#',
    },
    {
        title: 'Canadian Provincial Tax Engine',
        description:
            'Engineered multi-bracket provincial tax logic for British Columbia, Quebec, and Ontario within a core payroll processing system. Included self-correction logic to prevent over-taxation without manual intervention.',
        tags: ['C#', '.NET', 'SQL Server', 'Payroll Compliance'],
        status: 'Shipped',
        link: '#',
    },
    {
        title: 'Automated Data Pipeline',
        description:
            'Architected automated data pipelines that reduced manual record maintenance by up to 90% through self-serve source data access. Eliminated recurring manual processes across multiple teams.',
        tags: ['C#', 'SQL', 'Automation', 'REST APIs'],
        status: 'Shipped',
        link: '#',
    },
]

function Projects() {
    return (
        <section className="projects section-padding" id="projects">
            <div className="projects-inner section-inner">
                <p className="section-eyebrow">Projects</p>
                <h2 className="section-title">Things I've built.</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.title}>
                            <div className="project-card-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className={`project-status ${project.status === 'In Progress' ? 'status-progress' : 'status-shipped'}`}>
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
        </section>
    )
}

export default Projects