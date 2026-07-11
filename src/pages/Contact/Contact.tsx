import './Contact.css'

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

function Contact() {
    return (
        <section className="contact section-padding" id="contact">
            <div className="contact-inner section-inner">
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title">Let's build something.</h2>
                <p className="contact-intro">
                    Open to full-time roles, contract work, and collaborations. If you have a role in mind,
                    a project to discuss, or just want to connect — my inbox is open.
                </p>
                <div className="contact-links">
                    <a href="mailto:rars213@gmail.com" className="contact-link">
                        <EmailIcon />
                        <span>rars213@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/rosa-rivera-salgado" target="_blank" rel="noreferrer" className="contact-link">
                        <LinkedInIcon />
                        <span>linkedin.com/in/rosa-rivera-salgado</span>
                    </a>
                    <a href="https://github.com/Kaito321" target="_blank" rel="noreferrer" className="contact-link">
                        <GitHubIcon />
                        <span>github.com/Kaito321</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact