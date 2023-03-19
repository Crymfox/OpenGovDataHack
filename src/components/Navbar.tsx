const Navbar = () => {
    return (
        <div className="flex flex-wrap px-3 bg-blue-800 text-white text-lg font-semibold">
            <a href="" className="p-1">
                <img src="/assets/Logo.png" alt="Logo" width={150} />
            </a>
            <div className="ml-auto"></div>
            <a href="" className="p-4 hover:bg-blue-700 duration-300">Catalogue</a>
            <a href="" className="p-4 hover:bg-blue-700 duration-300">University</a>
            <a href="" className="p-4 hover:bg-blue-700 duration-300">School</a>
            <a href="" className="p-4 hover:bg-blue-700 duration-300">Share</a>
            <a href="" className="p-4 hover:bg-blue-700 duration-300">Partners</a>
        </div>
    )
}

export default Navbar