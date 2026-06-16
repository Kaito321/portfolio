import './Skills.css'

const skills = {
    'Languages & Frameworks': [
        { name: 'C#', level: 95 },
        { name: '.NET Core / Framework', level: 90 },
        { name: 'PHP', level: 90 },
        { name: 'Python', level: 70 },
        { name: 'JavaScript', level: 50 },
        { name: 'TypeScript', level: 40 },
        { name: 'React', level: 40 },
    ],
    'Data & Databases': [
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Database Design', level: 90 },
        { name: 'Splunk', level: 70 },
    ],
    'Tools & Practices': [
        { name: 'Git', level: 90 },
        { name: 'REST APIs', level: 90 },
        { name: 'Unit Testing', level: 85 },
        { name: 'Docker', level: 10 },
        { name: 'AWS', level: 30 },
    ],
}

function Skills() {
    return (
        <section className="skills section-padding" id="skills">
            <div className="skills-inner section-inner">
                <p className="section-eyebrow">Technical Skills</p>
                <h2 className="section-title">What I bring to the table.</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div className="skill-category" key={category}>
                            <h3 className="skill-category-title">{category}</h3>
                            <div className="skill-list">
                                {items.map((skill) => (
                                    <div className="skill-item" key={skill.name}>
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{ width: `${skill.level}%` }}
                                            />
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