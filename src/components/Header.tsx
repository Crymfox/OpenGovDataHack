type HeaderProps = {
    title: string,
    description: string,
    image?: boolean
}

const Header = ({title, description, image}: HeaderProps) => {
    return (
        <div className="flex flex-row space-x-6">
            <div className="flex flex-col space-y-12 m-20">
                <h1 className="text-5xl mx-auto text-slate-800">
                    {title}
                </h1>
                <p className="text-lg text-slate-600">
                    {description}
                </p>
            </div>
            {image && <img src="/assets/LandingPage.jpg" alt="" width={650} />}
        </div>
    )
}

export default Header;
