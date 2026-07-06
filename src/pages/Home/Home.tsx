import { useEffect, useRef } from 'react'
import './Home.css'

const PaperAirplane = () => (
    <svg
        className="airplane-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(45deg)' }}
    >
        <path
            d="M22 2L11 13"
            stroke="var(--teal-light)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="var(--teal-light)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

function Home() {
    const nameRef = useRef<HTMLSpanElement>(null)
    const airplaneRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = nameRef.current
        const plane = airplaneRef.current
        if (el && plane) {
            const updatePosition = () => {
                const nameWidth = el.offsetWidth
                const svgEl = plane.querySelector('svg')
                const planeWidth = svgEl ? svgEl.getBoundingClientRect().width : 28

                plane.style.setProperty('--travel-distance', `${nameWidth - planeWidth * -1}px`)
            }

            updatePosition()

            setTimeout(() => {
                el.classList.add('animate')
                plane.classList.add('animate')
                if (el.parentElement) {
                    el.parentElement.classList.add('animate')
                }
            }, 300)

            window.addEventListener('resize', () => {
                el.classList.remove('animate')
                plane.classList.remove('animate')
                plane.style.transition = 'none'

                setTimeout(() => {
                    updatePosition()
                    el.classList.add('animate')
                    plane.classList.add('animate')
                }, 300)
            })

            return () => window.removeEventListener('resize', updatePosition)
        }
    }, [])

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-eyebrow">Senior Software Engineer</p>
                <h1 className="hero-title">
                    Hi, I'm{' '}
                    <span className="hero-name-wrapper">
            <span className="hero-name" ref={nameRef}>Rosa Rivera</span>
            <span className="airplane-wrapper" ref={airplaneRef}>
              <PaperAirplane />
            </span>
          </span>
                </h1>
                <p className="hero-subtitle">
                    Senior backend engineer by trade, maker at heart. Whether I’m refactoring complex enterprise code, 
                    building high-compliance automation pipelines, or designing a custom clothing line, 
                    I’m obsessed with turning complicated logic into elegant, reliable design.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn-oval">
                        <span>View My Work</span>
                    </a>
                    <a href="#contact" className="btn-icon-only" aria-label="Get in touch">
                        <MailIcon />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home