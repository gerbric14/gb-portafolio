import { navLinks } from "../data";
import styles from "../data/styles";
import logo from "../assets/LogoDev.webp";
import { IconsLogos } from "./IconsLogos";


export const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="ss:flex ss:items-center ss:justify-between">
        <a
          href=""
          className="flex items-center mb-1 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          {/* Logo */}
          <img src={logo} alt="logo" className="w-[42px] h-[42px]" />
          {/* <span className="self-center text-2xl font-poppins font-semibold whitespace-nowrap text-white">
                GB
              </span> */}
        </a>

        {/* NavLinks */}
        <ul className="flex justify-between flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer mt-2 xs:mt-0 text-[14px] ss:text-[16px] hover:text-white ${
                index === navLinks.length - 1 ? "mr-0" : "ss:mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Linea */}
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="flex flex-col justify-between items-center ss:flex-row ss:items-center ss:justify-between">
        <span className="text-sm text-gray-500 mb-2 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Dev. German Briceño
          </a>
        </span>

        {/*Iconos Logos */}
        <IconsLogos size={24}/>

      </div>
    </div>
  </footer>
);



