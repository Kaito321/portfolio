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

/* --TODO: evaluate whether this will be used in the final version
const Hammer = () => (
    <svg
        width="25"
        height="25"
        viewBox="-1.5 -1.5 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'scaleX(-1)' }}
    >
        <path
            fill="currentColor"
            d="m2.536 8.9l2.828 2.828l6.364-6.364l-2.829-2.828zm12.727 5.656l-4.95-4.95l-.706.708l4.95 4.95zm1.415 1.415l-.707.707l1.767 1.767a.5.5 0 0 0 .707-.707zM6.01 2.596L7.485 1.12a2 2 0 0 1 2.829 0l2.828 2.829a2 2 0 0 1 0 2.828l-1.414 1.414l8.132 8.132a2.5 2.5 0 1 1-3.536 3.536l-8.132-8.132l-1.414 1.414a2 2 0 0 1-2.828 0l-2.83-2.827a2 2 0 0 1 0-2.829l1.475-1.474a1.5 1.5 0 0 1 .293-1.708L4.303 2.89a1.5 1.5 0 0 1 1.708-.293z"
        />
    </svg>
)*/

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