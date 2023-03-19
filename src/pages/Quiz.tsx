import Header from "../components/Header"
import Question from "../components/Question"

const data = {
    title: "Topic of the Quiz",
    description: "[Topic of the Quiz] is a fascinating subject that captures the attention of people from all walks of life. It is the study of [describe the subject briefly], and it encompasses a wide range of ideas and concepts that are essential for understanding the world around us. From the smallest particles in the universe to the largest galaxies, [Topic of the Quiz] provides insights into the workings of the natural world and the laws that govern it. Whether you're interested in pursuing a career in [related fields], or you simply want to expand your knowledge, [Topic of the Quiz] is a fascinating and rewarding subject to explore. So why not test your knowledge with our quiz and see how much you really know about this captivating topic?"
}

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
]


const Quiz = () => {
    return (
        <div>
            <Header title={data.title} description={data.description} />
            {
                questions.map((question, index) => {
                    return (
                        <Question key={index} number={index} question={question.questionText} options={question.answerOptions} />
                    )
                })
            }
        </div>
    )
}

export default Quiz