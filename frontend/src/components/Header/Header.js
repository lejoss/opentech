import React, { useState } from 'react';
import {
  Link,
  useLocation,
} from "react-router-dom";

// className="hidden md:block"
function Header() {
  let location = useLocation();
  let [hover, setHover] = useState(false)

  return (
    <nav className="fixed h-16 w-full bg-gray-900 shadow-md">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-full flex items-center justify-center sm:justify-end ">
          <div className="md:ml-10 flex items-baseline space-x-4">
            <Link onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} to="/" className="relative leading-relaxed capitalize text-gray-100 hover:text-gray-400 active:bg-gray-400 px-3 py-2 text-md font-light">
              <p>Home</p>
              {location.pathname.substring(1) === '' && <div style={{ bottom: -17, backgroundColor: hover ? '#cbd5e0' : null }} className="bg-white h-1 w-full relative"></div>}
            </Link>
            <Link onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} to="/people" className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 active:bg-gray-400 px-3 py-2 text-md font-light">
              <p>People</p>
              {location.pathname.split('/')[1] === 'people' && <div style={{ bottom: -17, backgroundColor: hover ? '#cbd5e0' : null }} className="bg-white h-1 w-full relative"></div>}
            </Link>
            <Link onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} to="/projects" className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 active:bg-gray-400 px-3 py-2 text-md font-light">
              <p>Projects</p>
              {location.pathname.split('/')[1] === 'projects' && <div style={{ bottom: -17, backgroundColor: hover ? '#cbd5e0' : null }} className="bg-white hover:text-gray-400 hover:bg-gray-400 h-1 w-full relative"></div>}
            </Link>
            <Link onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} to="/contact" className="leading-relaxed capitalize text-gray-100 hover:text-gray-400 active:bg-gray-400 px-3 py-2 text-md font-light">
              <p>Contact</p>
              {location.pathname.substring(1) === 'contact' && <div style={{ bottom: -17, backgroundColor: hover ? '#cbd5e0' : null }} className="bg-white h-1 w-full relative"></div>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;