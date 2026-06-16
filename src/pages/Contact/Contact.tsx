import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section className="contact section-padding" id="contact">
            <div className="contact-inner section-inner">
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title">Let's work together.</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <p className="contact-intro">
                            I'm currently open to new opportunities. Whether you have a role in mind,
                            a project to discuss, or just want to connect — my inbox is open.
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <span className="contact-label">Email</span>
                                <a href="mailto:rars213@gmail.com">rars213@gmail.com</a>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-label">LinkedIn</span>
                                <a href="https://linkedin.com/in/rosa-rivera-salgado" target="_blank" rel="noreferrer">
                                    linkedIn/rosa-rivera
                                </a>
                            </div>
                            <div className="contact-detail">
                                <span className="contact-label">Location</span>
                                <span className="contact-value">Dallas, Texas</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="form-success">
                                <h3>Message received.</h3>
                                <p>I'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="What's on your mind?"
                                        rows={5}
                                    />
                                </div>
                                <button type="submit" className="btn-primary">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact