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
                            I'm a software engineer with five years spent in high-stakes backend work 
                            — the kind where a wrong calculation means clients get over-taxed or a system silently loses data. 
                            Multi-bracket international tax compliance, automated pipelines, calculation engines that need to survive real payroll edge cases. 
                            It's precise, unforgiving work, and I like it that way.
                        </p>
                        <p>
                            My core stack is C#, .NET, and SQL, but I treat engineering as craft — 
                            the same attention I bring to a complex backend system, I bring to a sewing pattern or a hand-drafted design. 
                            Right now I'm expanding into Docker, cloud architecture, and AI workflows because 
                            I like knowing how the whole thing fits together, not just the piece I'm assigned to.
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
                            <span className="stat-text">Technical SME</span>
                            <span className="stat-label">Bridge between Product, QA, and Engineering on complex international compliance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About