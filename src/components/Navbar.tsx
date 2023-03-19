import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap px-3 bg-blue-800 text-white text-lg font-semibold">
      <Link to="/" className="p-1">
        <img src="/assets/Logo.png" alt="Logo" width={150} />
      </Link>
      <div className="ml-auto"></div>
      <Link to="/catalogue" className="p-4 hover:bg-blue-900 duration-300">
        Catalogue
      </Link>
      <Link to="/universities" className="p-4 hover:bg-blue-900 duration-300">
        University
      </Link>
      <Link to="/schools" className="p-4 hover:bg-blue-900 duration-300">
        School
      </Link>
      <Link to="/share" className="p-4 hover:bg-blue-900 duration-300">
        Share
      </Link>
      <Link to="/partners" className="p-4 hover:bg-blue-900 duration-300">
        Partners
      </Link>
    </div>
  );
};

export default Navbar;
