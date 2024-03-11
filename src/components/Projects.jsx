import styles from "../data/styles";
// import { CardImg } from "./CardImg";
import { CardProject } from "./CardProject";


export const Projects = () => (
  <section id="proyectos" className={`flex flex-1 flex-col ${styles.marginY}`}>
    {/* Grandientes */}
    {/* <div className="absolute z-[0] w-[50%] h-[50%] -right-[45%] rounded-full blue__gradient bottom-50" />
    <div className="absolute z-[0] w-[40%] h-[40%] -right-[35%] rounded-full white__gradient bottom-50" />
    <div className="absolute z-[0] w-[30%] h-[30%] -right-[30%] rounded-full pink__gradient bottom-50" /> */}
    
    <div className="">
      <h2 className={`${styles.heading2}`}>Proyectos</h2>
      <p className={`${styles.paragraph} mb-4 text-justify`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quo
        fugit! Accusamus nemo autem repudiandae quae libero! Saepe nulla minima
        ducimus quod culpa dicta? Dolores velit atque quidem quam asperiores.
      </p>
    </div>

    <div
      className={`flex flex-col items-center gap-4 md:flex-row md:justify-center text-justify`}
    >
      {/* <CardImg
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
      /> */}

      <CardProject
        title={"Planificador de gastos"}
        desc={
          "App que sirve para llevar un registro de los gastos que realizamos y asi tener una vision de nuestras finanzas."
        }
      />
      <CardProject
        title={"Planificador de gastos"}
        desc={
          "App que sirve para llevar un registro de los gastos que realizamos y asi tener una vision de nuestras finanzas."
        }
      />
    </div>
  </section>
);
