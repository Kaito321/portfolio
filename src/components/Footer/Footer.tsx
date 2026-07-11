import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-logo">
                    <span className="logo-r">R</span><span className="logo-b">b</span>
                </p>
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