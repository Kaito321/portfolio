import './Experience.css'

const experiences = [
    {
        company: 'Paycom',
        location: 'Grapevine, Texas',
        role: 'Software Developer IV',
        period: '2025 — 2026',
        bullets: [
            'Engineered multi-bracket provincial tax logic within core payroll processing systems to automate employer health tax (EHT) for British Columbia, Quebec, and Ontario.',
            'Developed proactive self-correction logic for tax overrides, preventing client over-taxation and ensuring 100% compliance without manual intervention.',
            'Launched high-impact epics, including new filing frequency feature, managing entire stack from database design and API development to UI implementation.',
            'Architected automated data pipelines that reduced manual record maintenance by up to 90% through implementation of self-serve source data access.',
            'Established standardized testing patterns and comprehensive documentation, including exhaustive edge case coverage across various tax jurisdictions, to ensure zero-defect releases.',
            'Elevated team technical baseline by training QA and Development peers on complex international calculations and providing architectural peer reviews for 12 major merge requests.',
            'Served as primary technical subject matter expert (SME) for international compliance, bridging gaps between Product, QA, and Support.',
            'Spearheaded internal process improvements and environment promotion checklists that significantly streamlined release velocity.',
        ],
    },
    {
        company: 'Paycom',
        location: 'Grapevine, Texas',
        role: 'Software Developer',
        period: '2021 — 2025',
        bullets: [
            'Designed and implemented C# REST API endpoints for real-time minimum wage calculations and compliance alerts, enabling rapid software adaptation to changing government regulations.',
            'Refactored legacy PHP code into modular, maintainable MVC-style patterns, significantly reducing maintenance friction and improving system scalability.',
            'Developed reusable validation logic and configuration-driven UI components to support country-specific compliance rules for international users.',
        ],
    },
]

function Experience() {
    return (
        <section className="experience section-padding" id="experience">
            <div className="experience-inner section-inner">
                <p className="section-eyebrow">Experience</p>
                <h2 className="section-title">Where I've worked.</h2>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div className="experience-item" key={index}>
                            <div className="experience-header">
                                <div className="experience-left">
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <p className="experience-company">{exp.company} — {exp.location}</p>
                                </div>
                                <span className="experience-period">{exp.period}</span>
                            </div>
                            <ul className="experience-bullets">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience