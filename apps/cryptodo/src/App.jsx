import AboutCompany from "./components/AboutCompany"
import HomePage from "./components/HomePage"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="min-h-screen bg-[#0C162F]">
   <Navbar/>
   <HomePage/>
   <AboutCompany/>
   <HowItWorks/>
    </div>
  )
}

export default App
