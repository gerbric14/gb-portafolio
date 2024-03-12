import styles from "../data/styles";
import { CardProject } from "./CardProject";
import { dataProject } from "../data";


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


    <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-between lg:justify-around">
      {dataProject.map(({id, title, desc, imgpc, imgmobile, cliente, categoria}) => {
        return (
          <div key={id} className={`flex`}>
              <CardProject id={id} title={title} desc={desc} imgpc={imgpc} imgmobile={imgmobile} cliente={cliente} categoria={categoria} />
          </div>
        )
      })}
    </div>
  </section>
);
