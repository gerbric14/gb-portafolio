import styles from "../data/styles";
// import { CardImg } from "./CardImg";
import { CardProject } from "./CardProject";


export const Projects = () => (
  <section id="proyectos" className={`flex flex-1 flex-col ${styles.marginY}`}>
    <div className="">
      <h2 className={`${styles.heading2} text-center sm:text-left`}>
        Proyectos
      </h2>
      <p className={`${styles.paragraph} mb-4 text-justify text-white`}>
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
