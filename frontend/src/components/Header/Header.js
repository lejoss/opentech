import {
  Link
} from "react-router-dom";

// className="hidden md:block"
function Header() {
  return (
    <nav className="fixed bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center">
            <div className="md:ml-10 flex items-baseline space-x-4">
              <Link to="/" className="bg-gray-200 text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/people" className="text-gray-400 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >People</Link>
              <Link to="/projects" className="text-gray-400 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >Projects</Link>
              <Link to="/contact" className="text-gray-400 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;