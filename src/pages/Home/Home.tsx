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

function Home() {
    const nameRef = useRef<HTMLSpanElement>(null)
    const airplaneRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const el = nameRef.current
        const plane = airplaneRef.current
        if (el && plane) {
            setTimeout(() => {
                el.classList.add('animate')
                plane.classList.add('animate')
            }, 300)
        }
    }, [])

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-eyebrow">Software Engineer</p>
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
                    I build reliable, scalable backend systems and bring them to life across the full stack.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn-primary">View My Work</a>
                    <a href="#contact" className="btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>
    )
}

export default Home