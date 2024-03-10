import styles, { layout } from "../data/styles";
import { CardTecnologias } from "./CardTecnologias";
import logogit from "../assets/Logo-git.webp";
import logohtml from "../assets/Logo-HTML5.webp";
import logojs from "../assets/Logo-JavaScript.webp";
import logogithub from "../assets/LogoGH.webp";
import logotailwind from "../assets/LogoTailwind.webp";
import logoreact from "../assets/LogoReact.webp";
import logocss from "../assets/LogoCss.webp";
import logopostgresql from "../assets/LogoPostgresql.webp";
import logomongo from "../assets/LogoMongoDB.webp";
import logonext from "../assets/LogoNext.webp";
import logonode from "../assets/LogoNodejs.webp";
import logobootstrap from "../assets/LogoBootstrap.webp";


export const Technologies = () => {

  return (
    <section
      id="tecnologias"
      className={`flex flex-1 flex-col ${styles.marginY} `}
    >
      <div className="">
        <h2 className={`${styles.heading2}`}>Tecnologías</h2>
        <p className={`${styles.paragraph} mb-4 text-justify`}>
          En mi viaje por el desarrollo web he cultivado habilidades y una serie
          de experiencias. Mi stack tecnológico incluye:
        </p>
      </div>

      {/*Card Tecnologias  */}
      <div
        className={`my-8 flex flex-wrap place-content-center sm:grid sm:grid-cols-6 gap-2`}
      >
        <CardTecnologias text={"Git"} img={logogit} />
        <CardTecnologias text={"HTML5"} img={logohtml} />
        <CardTecnologias text={"JavaScript"} img={logojs} />
        <CardTecnologias text={"React"} img={logoreact} />
        <CardTecnologias text={"TailwindCss"} img={logotailwind} />
        <CardTecnologias text={"GitHub"} img={logogithub} />
        <CardTecnologias text={"Css"} img={logocss} />
        <CardTecnologias text={"PostgreSQL"} img={logopostgresql} />
        <CardTecnologias text={"MongoDB"} img={logomongo} />
        <CardTecnologias text={"NextJs"} img={logonext} />
        <CardTecnologias text={"NodeJs"} img={logonode} />
        <CardTecnologias text={"Bootstrap"} img={logobootstrap} />
      </div>
    </section>
  );
}



