import Header from "../components/Header"

const Landing = () => {
    return (
        <div>
            <Header image />
            <div className="grid place-items-center">
                <button className="px-6 py-4 text-2xl bg-blue-800 hover:bg-blue-900 duration-300 rounded text-white">Start Quizz</button>
            </div>
        </div>
    )
}

export default Landing