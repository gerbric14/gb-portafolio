import styles from "../data/styles"
import docdown from '../assets/doc-down.svg'
import rocket from '../assets/rocket.svg'
import ButtonImg from "./ButtonImg";
import { ButtonMaterial } from "./ButtonMaterial";
import { IconsLogos } from "./IconsLogos";


export const Hero = () => {

  return (
    <section id="home" className={`flex flex-col sm:px-16 px-6 h-screen`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col items-center xl:px-0`}
      >
        {/* Grandientes */}
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[20%] h-[20%] rounded-full bottom-40 white__gradient" />

        {/* barra */}
        <div className=" py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-6">
          <p className={`${styles.paragraph} text-white ml-2`}>
            Disponible para trabajar
          </p>
        </div>

        {/* Presentacion */}
        <div className="flex flex-col w-full m-6">
          <p className="py-1 flex-1 font-poppinsfont-normal text-[52px] ss:text-[62px] text-white ss:leading-[70px] leading-[75px] text-center ">
            Hola, soy
            <br className="xs:block hidden" />{" "}
            <span className="py-1 text-white ">German Briceño</span>
            <br className="hidden ss:flex ss:flex-row" />
          </p>
          <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[62px] text-gradient ss:leading-[70px] leading-[75px] text-center it mb-6">
            Desarrollador Fronted
          </h1>
        </div>

        <div className="flex z-[2] mt-4">
          {/* <ButtonImg
            text={"Contáctame"}
            styles={"mr-4 ml-4 text-primarygb"}
            img={rocket}
          />
          <ButtonImg text={"CV"} styles={"mr-4 text-primarygb"} img={docdown} /> */}

          {/* <ButtonMaterial  children={"Contáctame"}/>
          <ButtonMaterial  children={"CV"}/> */}

          {/*Iconos Logos */}
          <IconsLogos  size={30}/>

        </div>
      </div>
    </section>
  );
}
