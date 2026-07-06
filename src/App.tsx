import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'


function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App