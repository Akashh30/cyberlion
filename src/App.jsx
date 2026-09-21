import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import {Routes, Route} from "react-router-dom"
import Policy from "./pages/Policy"
import Pricing from "./pages/Pricing"

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cyberlion" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="/Pricing" element={<Pricing/>}/>

      </Routes> 
    </>
  )
}

export default App
