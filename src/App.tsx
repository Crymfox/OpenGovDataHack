import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Partners from "./pages/Partners"

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/partners" element={<Partners />} />"    
      </Routes>
    </div>
  )
}

export default App
