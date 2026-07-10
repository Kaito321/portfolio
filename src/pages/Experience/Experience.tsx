import './Experience.css'

type Bullet = { text: string; highlights?: string[] }

const experience = {
    company: 'Paycom',
    location: 'Grapevine, Texas',
    roles: [
        {
            role: 'Software Developer IV',
            period: '2025 — 2026',
            bullets: [
                {
                    text: 'Engineered multi-bracket provincial Employer Health Tax logic for British Columbia, Quebec, and Ontario, spanning the full stack — C# engine work across .NET 8 and .NET Framework 4.8, PHP integration, database schema changes to eliminate hardcoded values, and React/JavaScript frontend updates. Included self-correction logic to prevent client over-taxation automatically, with exhaustive multi-province testing to validate calculation accuracy across payroll scenarios.',
                    highlights: [
                        'multi-bracket provincial Employer Health Tax logic',
                        'C# engine work across .NET 8 and .NET Framework 4.8',
                        'self-correction logic',
                    ],
                },
                {
                    text: 'Delivered a new filing frequency column on the state tax page after research revealed that filing and deposit dates were often mistaken as the same — with tax teams reconciling the difference through personal spreadsheets and word of mouth. Owned the full lifecycle — scoping with Product, designing a new filing-to-tax mapping table, seeding data across all states, and building PHP frontend updates — establishing a single source of truth and reducing manual record maintenance by up to 90%.',
                    highlights: [
                        'new filing frequency column',
                        'single source of truth',
                        'reducing manual record maintenance by up to 90%',
                    ],
                },
                {
                    text: 'Served as primary technical subject matter expert for international compliance, bridging Product, QA, and Support while training peers on complex international calculations.',
                    highlights: [
                        'technical subject matter expert',
                    ],
                },
            ] as Bullet[],
        },
        {
            role: 'Software Developer',
            period: '2021 — 2025',
            bullets: [
                {
                    text: 'Designed and implemented C# REST API endpoints for real-time minimum wage calculations and compliance alerts, enabling rapid adaptation to changing government regulations.',
                    highlights: [
                        'C# REST API endpoints',
                    ],
                },
                {
                    text: 'Refactored legacy PHP into modular MVC-style patterns, reducing maintenance friction and improving system scalability.',
                    highlights: [
                        'PHP into modular MVC-style patterns',
                    ],
                },
                {
                    text: 'Built reusable validation logic and configuration-driven UI components to support country-specific compliance rules for international users.',
                    highlights: [
                        'country-specific compliance rules for international users',
                    ],
                },
            ] as Bullet[],
        },
    ],
}

// Wraps highlight phrases inside the bullet text with a span for styling
const renderBullet = (bullet: Bullet) => {
    if (!bullet.highlights || bullet.highlights.length === 0) {
        return bullet.text
    }

    // Escape special regex characters in highlights
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
                <div className="experience-company">
                    <div className="experience-company-header">
                        <h3 className="company-name">{experience.company}</h3>
                        <span className="company-location">{experience.location}</span>
                    </div>
                    <div className="experience-roles">
                        {experience.roles.map((role, index) => (
                            <div className="experience-role" key={index}>
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
            </div>
        </section>
    )
}

export default Experience