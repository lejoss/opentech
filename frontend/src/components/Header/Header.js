import React, { useState } from 'react';
import {
  Link,
  useLocation,
} from "react-router-dom";

const links = [
  {
    path: '/',
    name: 'home',
    active: false,
  },
  {
    path: '/people',
    name: 'people',
    active: false,
  },
  {
    path: '/projects',
    name: 'projects',
    active: false,
  },
  {
    path: '/contact',
    name: 'contact',
    active: false,
  },
]

// className="hidden md:block"
function Header() {
  let location = useLocation();
  let [navLinks, setNavLinks] = useState(links);

  function onHoverLink(linkIndex) {
    setNavLinks(prevNavLinks => prevNavLinks.map((link, index) => {
      if (index !== linkIndex) {
        return {
          ...link,
          active: false,
        }
      }

      if (link.active) {
        return {
          ...link,
          active: false,
        }
      }

      return {
        ...link,
        active: true,
      }
    }));
  }



  return (
    <nav className="fixed h-20 w-full shadow-lg">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-full flex items-center justify-center sm:justify-end ">
          <div className="md:ml-10 flex items-baseline space-x-4">
            {navLinks.map(({ path, name, active }, index) => (
              <Link key={path} onMouseOver={() => onHoverLink(index)} onMouseOut={() => onHoverLink(index)} to={path} className="relative leading-relaxed capitalize text-gray-100 hover:text-gray-400 px-3 py-2 text-md font-light">
                <p>{name}</p>
                {location.pathname.split('/')[1] === path.substring(1) && <div style={{ bottom: -25, backgroundColor: active ? '#cbd5e0' : '#f7fafc' }} className="h-1 w-full relative"></div>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;