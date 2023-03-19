import { Link } from "react-router-dom"

const QuizzCard = () => {
    return (
        <div>
            <div className="rounded hover:shadow-xl border-2 border-blue-800 p-5 grid place-items-center h-52 w-80 m-3">
                <h1 className="text-xl mx-auto text-slate-800">
                    Quiz Title
                </h1>
                <p className="text-sm text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
                <Link to="/quiz" className="px-3 py-2 text-base bg-blue-800 hover:bg-blue-900 duration-300 rounded text-white">Take Quizz</Link>
            </div>
        </div>
    )
}

export default QuizzCard