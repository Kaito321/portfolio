import './Skills.css'

const skillsData = {
    core: {
        title: 'Core',
        subtitle: 'What I ship with confidence',
        categories: {
            'Languages & Frameworks': ['C#', '.NET', 'PHP', 'Python'],
            'Data & Databases': ['SQL', 'SQL Server', 'MySQL', 'Database Design', 'Splunk'],
            'Tools & Practices': ['Git', 'REST APIs'],
        },
    },
    growing: {
        title: 'Actively Growing',
        subtitle: 'What I\'m sharpening right now',
        categories: {
            'Languages & Frameworks': ['TypeScript', 'React', 'JavaScript'],
            'Tools & Practices': ['Docker', 'AWS', 'CI/CD'],
        },
    },
}

// Keep this in sync with the projects array in Projects.tsx
const projectTags = [
    'React', 'TypeScript', 'AWS', 'Docker', 'CI/CD',
    'C#', '.NET', 'SQL Server', 'Payroll Compliance',
    'SQL', 'Automation', 'REST APIs',
]

function Skills() {
    const hasProject = (skill: string) => projectTags.includes(skill)

    const handleSkillClick = (skill: string) => {
        if (hasProject(skill)) {
            const projectsSection = document.getElementById('projects')
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <section className="skills section-padding" id="skills">
            <div className="skills-inner section-inner">
                <p className="section-eyebrow">Technical Skills</p>
                <h2 className="section-title">Tools of the trade</h2>
                <div className="skills-tiers">
                    {Object.entries(skillsData).map(([tierKey, tier]) => (
                        <div className={`skills-tier tier-${tierKey}`} key={tierKey}>
                            <div className="tier-header">
                                <h3 className="tier-title">{tier.title}</h3>
                                <p className="tier-subtitle">{tier.subtitle}</p>
                            </div>
                            <div className="tier-categories">
                                {Object.entries(tier.categories).map(([category, skills]) => (
                                    <div className="tier-category" key={category}>
                                        <h4 className="tier-category-title">{category}</h4>
                                        <div className="skill-tags">
                                            {skills.map((skill) => {
                                                const isLinked = hasProject(skill)
                                                return (
                                                    <span
                                                        className={`skill-tag ${isLinked ? 'skill-tag-linked' : ''}`}
                                                        key={skill}
                                                        onClick={() => handleSkillClick(skill)}
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills