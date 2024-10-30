import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [nav]);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed px-4 backdrop-blur-sm z-50">
      <div className="w-[200px]">
        <h1 className="text-xl ml-2 text-white">DEV MHILL</h1>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="hidden md:flex items-center justify-center gap-4">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-6 py-2 cursor-pointer capitalize font-medium hover:scale-105 duration-200 
              bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg 
              hover:bg-white/20 hover:border-white/40 transition-all"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[200px] flex justify-end">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-black backdrop-blur-sm text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
