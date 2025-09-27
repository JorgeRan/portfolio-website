import logo from './logo.svg';
import './index.css';
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Porfolio'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
