import AboutCompany from "./components/AboutCompany"
import HomePage from "./components/HomePage"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import Advantages from "./components/Advantages"
import Tokenmics from "./components/Tokenmics"

function App() {
  

  return (
    <div className="min-h-screen bg-[#0C162F]">
   <Navbar/>
   <HomePage/>
   <AboutCompany/>
   <HowItWorks/>
   <Advantages/>
   <Tokenmics/>
    </div>
  )
}

export default App
