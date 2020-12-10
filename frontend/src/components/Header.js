function Header() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="bg-gray-200 text-gray-400 px-3 py-2 rounded-md text-sm font-medium" data-link data-hover-link>Home</a>
                <a href="/people" className="text-gray-400 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                  data-link data-hover-link>People</a>
                <a href="/projects" className="text-gray-400 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                  data-link data-hover-link>Projects</a>
                <a href="/contact" className="text-gray-400 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                  data-link data-hover-link>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;