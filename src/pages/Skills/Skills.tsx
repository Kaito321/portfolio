import './Skills.css'
import { projects } from '../../data/projects'
import { skills } from '../../data/skills'

// Automatically checks projects and exports skills used to keep skill button functions in sync with actual projects
const projectTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
)

function Skills() {
    const hasProject = (skill: string, tierKey: string) =>
        tierKey === 'growing' && projectTags.includes(skill)

    const handleSkillClick = (skill: string, tierKey: string) => {
        if (hasProject(skill, tierKey)) {
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
                    {Object.entries(skills).map(([tierKey, tier]) => (
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
                                                const isLinked = hasProject(skill, tierKey)
                                                return (
                                                    <span
                                                        className={`skill-tag ${isLinked ? 'skill-tag-linked' : ''}`}
                                                        key={skill}
                                                        onClick={() => handleSkillClick(skill, tierKey)}
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