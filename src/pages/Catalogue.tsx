import QuizCard from "../components/QuizCard"

const Catalogue = () => {
    return (
        <div className="mx-16 my-8">
            <h1 className="text-5xl text-slate-800 m-20 text-center">Pack of Quiz:</h1>
            <div className="flex flex-wrap">
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
        </div>
    )
}

export default Catalogue