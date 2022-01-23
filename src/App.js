import { Contact } from './components/Contact'
import Footer from './components/Footer'
import Maincontent  from './components/Maincontent'
import Projects  from './components/Projects'
import Navbar2 from './components/Navbar2'
import Skills from './components/Skills'
import Testomonials from './components/Testomonials'
import './App.css' 
import 'aos/dist/aos.css';



function App() {
  
  return (
    <div id='home'>
      <Navbar2 />
      <Maincontent />
      <Projects />
      <Testomonials />
      <Skills />
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App