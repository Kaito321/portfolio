import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <img src="/favicon.svg" alt="Rosa Builds" className="footer-logo" />
                <p className="footer-copy">
                    Designed & built by Rosa Rivera 2026
                </p>
                <div className="footer-links">
                    <a href="mailto:rars213@gmail.com">Email</a>
                    <a href="https://linkedin.com/in/rosa-rivera-salgado" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/Kaito321" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer