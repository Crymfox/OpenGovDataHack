import QuizCard from "../components/QuizCard"

const Catalogue = () => {
    return (
        <div className="mx-16 my-8">
            <h1 className=" text-3xl text-slate-700 p-5">Available pack of Quiz:</h1>
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