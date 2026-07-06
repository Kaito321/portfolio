import './About.css'

function About() {
    return (
        <section className="about section-padding" id="about">
            <div className="about-inner section-inner">
                <p className="section-eyebrow">About Me</p>
                <h2 className="section-title">Architect & Artisan</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I’m a bilingual software engineer who spent the last five years building heavy-duty 
                            enterprise backend architecture. My focus is on high-stakes, transactional environments—the 
                            kind of work that involves designing multi-bracket international tax compliance logic or 
                            building automated data pipelines that slashed manual system maintenance by 90%.
                        </p>
                        <p>
                            While my core toolkit centers on C#, .NET, and SQL, I treat engineering as a true craft —
                            the same attention I bring to a complex backend system, I bring to everything I build.
                            I'm always evolving my stack, constantly integrating new tools—from Docker containerization
                            to modern AI workflows—to build cleaner, smarter solutions from the ground up.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat-number">90%</span>
                            <span className="stat-label">Less manual work — automated away through self-serve data pipelines</span>
                        </div>
                        <div className="stat">
                            <span className="stat-text">Backend roots,</span>
                            <span className="stat-label">full stack vision</span>
                        </div>
                        <div className="stat">
                            <span className="stat-text">Code · Cosplay · Commission</span>
                            <span className="stat-label">Creator by nature, in every medium</span>
                        </div>
                        <div className="stat">
                            <span className="stat-text">Bilingual</span>
                            <span className="stat-label">English & Spanish — built compliance systems for international markets</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About