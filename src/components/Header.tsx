const Header = () => {
    return (
        <div className="flex flex-row space-x-6">
            <div className="flex flex-col space-y-12 m-20">
                <h1 className="text-5xl mx-auto text-slate-800">
                    Take Our Scholar Quiz and Start Your Learning Journey
                </h1>
                <p className="text-lg text-slate-600">
                    Starting a new academic journey can be both exciting and overwhelming. That's why we've created a scholar orientation quiz to help you get started on the right foot. Our quiz is designed to test your knowledge and provide helpful information to guide you through your academic journey. You'll learn about important resources and tools, as well as tips for success. Whether you're a new student or a returning one, our scholar orientation quiz is a great way to ensure you're on the right track. So take the quiz now and start your journey towards academic success!
                </p>
            </div>
            <img src="/assets/LandingPage.jpg" alt="" width={650} />
        </div>
    )
}

export default Header