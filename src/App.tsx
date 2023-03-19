import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />      
      </Routes>
    </div>
  )
}

export default App
