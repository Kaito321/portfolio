import './About.css'

function About() {
    return (
        <section className="about section-padding" id="about">
            <div className="about-inner section-inner">
                <p className="section-eyebrow">About Me</p>
                <h2 className="section-title">Engineer by trade.<br />Problem solver by nature.</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm a bilingual software engineer with several years of experience building
                            complex payroll and compliance systems at scale. My work has touched everything
                            from multi-bracket international tax logic to automated data pipelines that
                            eliminated up to 90% of manual record maintenance.
                        </p>
                        <p>
                            I specialize in backend systems using C#, .NET, and SQL — but I'm actively
                            expanding my full stack capabilities, cloud architecture, and AI integration
                            skills to become a more complete engineer.
                        </p>
                        <p>
                            When I'm not building, I'm learning. Right now that means AWS Solutions
                            Architect certification, React, TypeScript, and Docker.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">90%</span>
                            <span className="stat-label">Manual Work Eliminated</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">12+</span>
                            <span className="stat-label">Major Systems Reviewed</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Languages</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About