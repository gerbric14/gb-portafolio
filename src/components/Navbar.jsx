import { useState, useEffect } from "react";
import { navLinks } from "../data";
import styles from "../data/styles";
import logo from '../assets/LogoDev.webp'
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export const Navbar = () => {
  const [active, setActive] = useState("inicio");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-90px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primarygb/60 backdrop-blur-md border-b border-white/5">
      <div className={`${styles.boxWidth} mx-auto ${styles.paddingX} py-6 flex justify-between items-center`}>
      <a href="#inicio">
        <img src={logo} alt="Logo German Briceño" className="w-[42px] h-[42px]" />
      </a>

      {/* Desktop */}
      <ul className="list-none sm:flex hidden justify-end items-center flex- z-[3]">
        {navLinks.map(({id, title}, index) => (
          <li
            key={id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-white ${
              active === id ? "text-cyan" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(id)}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile */}

      <div className="sm:hidden flex flex-1 justify-end items-center z-[3]">
        <img
          src={toggle ? close : menu}
          alt="Abrir menú"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-discount-gradient fixed top-[90px] left-0 right-0 h-screen z-40`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map(({id, title}, index) => (
              <li
                key={id}
                className={`font-poppins font-medium cursor-pointer text-[16px] w-9/12 
                 flex justify-center items-center rounded-full shadow-lg bg-mobile-hover p-4 hover:scale-110 hover:text-cyan ease-in duration-200 ${
                   active === title ? "text-cyan" : "text-dimWhite"
                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(id);
                  setToggle((prev) => !prev);
                }}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};



