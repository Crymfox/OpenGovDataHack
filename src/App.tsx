import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Catalogue from "./pages/Catalogue"
import Landing from "./pages/Landing"
import Partners from "./pages/Partners"

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="*" element={<h1 className="text-9xl">404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
