import { useState } from "react";
import { navLinks } from "../data";
import logo from '../assets/LogoDev.webp'
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center ">
        <img src={logo} alt="logo" className="w-[42px] h-[42px]" />

        {/* Desktop */}
        <ul className="list-none sm:flex hidden justify-end items-center flex- z-[3]">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-white ${
                active === nav.title ? "text-cyan" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile */}

        <div className="sm:hidden flex flex-1 justify-end items-center z-[3]">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient-2 absolute top-20 left-0 right-0 bottom-0`}
          >
            <ul className="list-none flex flex-col justify-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] w-9/12 
                 flex justify-center items-center rounded-full shadow-lg bg-black-gradient-2 p-4 hover:scale-110 hover:text-cyan ease-in duration-200 ${
                   active === nav.title ? "text-white" : "text-dimWhite"
                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
    </nav>
  );
};



