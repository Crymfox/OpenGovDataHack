import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center space-x-4 py-5 px-20 bg-blue-800 text-white text-sm font-semibold">
      <Link to="/" className="p-1">
        <img src="/assets/Logo.png" alt="Logo" width={150} />
      </Link>
      <div className="flex-1"></div>
      <Link to="/catalogue" className=" hover:bg-blue-900 duration-300">
        Catalogue
      </Link>
      <Link to="/universities" className=" hover:bg-blue-900 duration-300">
        University
      </Link>
      <Link to="/schools" className=" hover:bg-blue-900 duration-300">
        School
      </Link>
      <Link to="/share" className=" hover:bg-blue-900 duration-300">
        Share
      </Link>
      <Link to="/partners" className=" hover:bg-blue-900 duration-300">
        Partners
      </Link>
    </div>
  );
};

export default Navbar;
