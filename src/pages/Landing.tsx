import Header from "../components/Header"

const Landing = () => {
    return (
        <div>
            <Header image />
            <div className="grid place-items-center">
                <button className="px-6 py-4 text-2xl bg-blue-600 hover:bg-blue-700 duration-300 rounded text-white">Start Quizz</button>
            </div>
        </div>
    )
}

export default Landing