import {
  Link
} from "react-router-dom";

// className="hidden md:block"
function Header() {
  return (
    <nav className="fixed h-16 w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-full flex items-center justify-center sm:justify-end ">
          <div className="md:ml-10 flex items-baseline space-x-4">
            <Link to="/">
              <p className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 px-3 py-2 text-sm font-light">Home</p>
            </Link>
            <Link to="/people"><p className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 px-3 py-2 text-sm font-light">People</p></Link>
            <Link to="/projects"><p className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 px-3 py-2 text-sm font-light">Projects</p></Link>
            <Link to="/contact"><p className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 px-3 py-2 text-sm font-light">Contact</p></Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;