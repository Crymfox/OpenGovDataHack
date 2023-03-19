import { Link } from "react-router-dom"
import Header from "../components/Header"

const data = {
    title: "Take Our Scholar Quiz and Start Your Learning Journey",
    description: "Starting a new academic journey can be both exciting and overwhelming. That's why we've created a scholar orientation quiz to help you get started on the right foot. Our quiz is designed to test your knowledge and provide helpful information to guide you through your academic journey. You'll learn about important resources and tools, as well as tips for success. Whether you're a new student or a returning one, our scholar orientation quiz is a great way to ensure you're on the right track. So take the quiz now and start your journey towards academic success!"
}

const Landing = () => {
    return (
        <div>
            <Header title={data.title} description={data.description} image />
            <div className="grid place-items-center">
                <Link to="/catalogue" className="px-6 py-4 text-2xl bg-blue-800 hover:bg-blue-900 duration-300 rounded text-white">Start Quizz</Link>
            </div>
        </div>
    )
}

export default Landing