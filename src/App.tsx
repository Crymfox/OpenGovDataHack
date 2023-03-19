import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Catalogue from "./pages/Catalogue"
import Landing from "./pages/Landing"
import Partners from "./pages/Partners"
import Schools from "./pages/Schools";
import Quiz from "./pages/Quiz"

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/partners" element={<Partners />} />"
        <Route path="/schools" element={<Schools />} />"
        <Route path="/partners" element={<Partners />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<h1 className="text-4xl p-5 text-center">404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App
