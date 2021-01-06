import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const links = [
  {
    path: '/',
    name: 'home',
    active: false,
    hash: false,
  },
  {
    path: '/people',
    name: 'people',
    active: false,
    hash: false,
  },
  {
    path: '/projects',
    name: 'projects',
    active: false,
    hash: false,
  },
  {
    path: '/#contact',
    name: 'contact',
    active: false,
    hash: true,
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
    <nav className="fixed z-10 h-16 w-full shadow-sm bg-white">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-full flex items-center justify-center lg:justify-end">
          <div className="md:ml-10 flex items-baseline space-x-4">
            {navLinks.map(({ path, name, active, hash }, index) => {
              if (hash) {
                return (
                  <HashLink key={path} onMouseOver={() => onHoverLink(index)} onMouseOut={() => onHoverLink(index)} to={path} className="relative leading-relaxed capitalize text-indigo-600  hover:text-gray-400 px-3 py-2 text-md font-light">
                    <p>{name}</p>
                    {location.pathname.split('/')[1] === path.substring(1) && <div style={{ bottom: -17, backgroundColor: active ? '#cbd5e0' : '#5a67d8' }} className="h-1 w-full relative"></div>}
                  </HashLink>
                )
              }
              return (
                <Link key={path} onMouseOver={() => onHoverLink(index)} onMouseOut={() => onHoverLink(index)} to={path} className="relative leading-relaxed capitalize text-indigo-600  hover:text-gray-400 px-3 py-2 text-md font-light">
                  <p>{name}</p>
                  {location.pathname.split('/')[1] === path.substring(1) && <div style={{ bottom: -17, backgroundColor: active ? '#cbd5e0' : '#5a67d8' }} className="h-1 w-full relative"></div>}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;