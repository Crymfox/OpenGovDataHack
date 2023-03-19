import QuizCard from "../components/QuizCard"

const Catalogue = () => {
    return (
      <div className="mx-16 my-8">
        <h1 className="text-5xl text-slate-800 m-20 text-center">Packs:</h1>
        <div className="grid grid-cols-3 gap-20">
          <QuizCard
            title="Is Computer Science right for me?"
            description="This quiz will help you determine if computer science is the right major for you."
          />

          <QuizCard
            title="Am I into Robotics?"
            description="This quiz will help you determine if you should pursue a career in robotics."
          />
        </div>
      </div>
    );
}

export default Catalogue