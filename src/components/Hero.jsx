import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../data/styles";
import { IconsLogos } from "./IconsLogos";

export const Hero = () => {
      const el = useRef(null);

      useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Frontend Developer", "Web Developer"],
          startDelay: 300,
          typeSpeed: 150,
          backDelay: 150,
          backSpeed: 150,
          // smartBackspace: true,
          showCursor: true,
          loop: true,
        });

        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);


  return (
    <section id="inicio" className={`relative overflow-hidden flex flex-col sm:px-16 px-6 h-[700px]`}>
      <div className="hero-glow pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] max-w-[95vw] rounded-full z-0" />
      <div className={`relative z-10 flex-auto ${styles.flexCenter} flex-col xl:px-0`}>
        {/* barra */}
        <div className=" py-[4px] px-1 bg-discount-gradient rounded-[10px] animate-jump-in animate-delay-300 animate-once">
          <p className={`${styles.paragraph} text-white ml-2`}>
            Disponible para trabajar
          </p>
        </div>

        {/* Presentacion */}
        <div className="flex flex-col w-full m-6">
          <p className="py-1 flex-1 font-poppins font-normal text-[38px] xs:text-[52px] ss:text-[62px] text-white ss:leading-[70px] leading-[75px] text-center ">
            Hola, soy
            <br className="xs:block hidden" />{" "}
            <span className="py-1 text-white ">German Briceño</span>
            <br className="hidden ss:flex ss:flex-row" />
          </p>
          <h1 className="flex-1 font-poppins font-semibold text-[30px] xs:text-[38px] ss:text-[52px] text-gradient ss:leading-[70px] leading-[75px] text-center it md:mb-6">
            <span ref={el}></span>
          </h1>
        </div>

        <div className="flex z-[2] md:mt-4">
          {/*Iconos Logos */}
          <IconsLogos size={30} />
        </div>
      </div>
    </section>
  );
};
