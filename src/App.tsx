import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className="grid place-items-center">
        <button className="px-6 py-4 text-2xl bg-blue-600 hover:bg-blue-700 rounded text-white">Start Quizz</button>
      </div>
    </div>
  )
}

export default App
