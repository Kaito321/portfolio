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

                plane.style.setProperty('--travel-distance', `${nameWidth + planeWidth + 10}px`)
            }

            const startAnimation = () => {
                updatePosition()

                setTimeout(() => {
                    el.classList.add('animate')
                    plane.classList.add('animate')
                    if (el.parentElement) {
                        el.parentElement.classList.add('animate')
                    }
                }, 300)
            }

            // Wait for fonts to load before measuring
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(startAnimation)
            } else {
                startAnimation()
            }

            window.addEventListener('resize', () => {
                el.classList.remove('animate')
                plane.classList.remove('animate')
                plane.style.transition = 'none'

                setTimeout(() => {
                    updatePosition()
                    el.classList.add('animate')
                    plane.classList.add('animate')
                    if (el.parentElement) {
                        el.parentElement.classList.add('animate')
                    }
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
                    I build things. Backend systems that handle millions of tax calculations, small apps I actually use,
                    costumes stitched from patterns I drafted myself. The medium changes; the impulse doesn't. 
                    I like taking something messy and making it work reliably.
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