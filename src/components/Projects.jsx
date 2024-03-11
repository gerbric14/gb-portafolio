import styles from "../data/styles";
import { CardImg } from "./CardImg";


export const Projects = () => (
  <section id="proyectos" className={`flex flex-1 flex-col ${styles.marginY}`}>
    {/* Grandientes */}
    <div className="absolute z-[0] w-[35%] h-[45%] left-[65%] rounded-full blue__gradient" />
    <div className="absolute z-[0] w-[30%] h-[40%] left-[55%] rounded-full white__gradient top-52" />
    {/* <div className="absolute z-[0] w-[30%] h-[30%] left-[45%] rounded-full pink__gradient" /> */}

    <div className="">
      <h2 className={`${styles.heading2}`}>Proyectos</h2>
      <p className={`${styles.paragraph} mb-4 text-justify text-white`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quo
        fugit! Accusamus nemo autem repudiandae quae libero! Saepe nulla minima
        ducimus quod culpa dicta? Dolores velit atque quidem quam asperiores.
      </p>
    </div>

    <div
      className={`flex flex-col items-center gap-4 md:flex-row md:justify-center text-justify`}
    >
      <CardImg
        title={"Restaurante App"}
        desc={
          "App que sirve para la toma de pedidos de cualquier restaurante o quiosco, totalmente adaptable a todas las pantallas y adicional tiene una vista para las ordenes pendientes, excelente para el equipo de cocina visualice los pedidos y complete los realizados."
        }
      />

      <CardImg
        title={"Planificador de gastos"}
        desc={
          "App que sirve para llevar un registro de los gastos que realizamos y asi tener una vision de nuestras finanzas."
        }
      />
    </div>
  </section>
);
