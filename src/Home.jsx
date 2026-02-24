
import Heropage from "./components/Heropage"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Exprience from "./components/Exprience"
import Education from "./components/Education"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Click from "./components/Click"



function App() { 
  return (
  <>
  
   <main className="min-h-screen  w-full bg-slate-950 text-white overflow-hidden">
    <Navbar/>
    <Click/>
    <Heropage/>
    <About/>
    <Education/>
    <Skills/>
    <Exprience/>
    <Projects/>
    {/* <Services/> */}
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
     </main>
  </>
  )
}

export default App
