import './Projects.css'

export const projects = [
    {
        title: 'Portfolio Website',
        description:
            'A full stack personal portfolio built with React, TypeScript, and Vite. Deployed on AWS with CI/CD via ' +
            'GitHub Actions. Features AI integration and a clean, responsive design.',
        tags: ['JavaScript', 'React', 'TypeScript', 'AWS', 'CI/CD', 'Git', 'Claude'],
        status: 'In Progress',
        link: '#',
    },
    {
        title: 'JobSearch App with Claude',
        description:
            'AI-powered job search agent built with React and Claude. Upload your resume, set your criteria, and let ' +
            'the agent surface the most compatible listings with a ranked compatibility score.',
        tags: ['React', 'TypeScript', 'Claude', 'API', 'SQL', 'JSON', 'HTML', 'Database', 'Git'],
        status: 'In Progress',
        link: 'https://github.com/Kaito321/jobsearchagent',
    }
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