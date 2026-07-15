import './Experience.css'
import { experiences } from '../../data/experience'

type Bullet = { text: string; highlights?: string[] }

const renderBullet = (bullet: Bullet) => {
    if (!bullet.highlights || bullet.highlights.length === 0) {
        return bullet.text
    }

    const escaped = bullet.highlights.map((h) =>
        h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    )
    const regex = new RegExp(`(${escaped.join('|')})`, 'g')
    const parts = bullet.text.split(regex)

    return parts.map((part, i) =>
        bullet.highlights!.includes(part)
            ? <strong className="highlight" key={i}>{part}</strong>
            : part
    )
}

function Experience() {
    return (
        <section className="experience section-padding" id="experience">
            <div className="experience-inner section-inner">
                <p className="section-eyebrow">Experience</p>
                <h2 className="section-title">Where I've built.</h2>
                <div className="experience-list">
                    {experiences.map((company, cIndex) => (
                        <div className="experience-company" key={cIndex}>
                            <div className="experience-company-header">
                                <h3 className="company-name">{company.company}</h3>
                                <span className="company-location">{company.location}</span>
                            </div>
                            <div className="experience-roles">
                                {company.roles.map((role, rIndex) => (
                                    <div className="experience-role" key={rIndex}>
                                        <div className="role-header">
                                            <h4 className="role-title">{role.role}</h4>
                                            <span className="role-period">{role.period}</span>
                                        </div>
                                        <ul className="role-bullets">
                                            {role.bullets.map((bullet, i) => (
                                                <li key={i}>{renderBullet(bullet)}</li>
                                            ))}
                                        </ul>
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

export default Experience