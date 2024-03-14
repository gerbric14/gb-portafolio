import styles from "../data/styles";
import { CardProject } from "./CardProject";
import { dataProject } from "../data";


export const Projects = () => (
  <section id="proyectos" className={`flex flex-1 flex-col font-poppins ${styles.marginY}`}>
    <div className="">
      <h2 className={`${styles.heading2} text-center font-poppins sm:text-left`}>
        Proyectos
      </h2>
      <p className={`${styles.paragraph} mb-4 text-justify text-white font-poppins`}>
        Transformamos sus ideas en un proyecto web personalizado que captura la esencia de su visión. Cada página que construimos es una representación única de su identidad digital, destinada a inspirar tanto a usted como a sus visitantes.
      </p>
    </div>


    <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-between lg:justify-around">
      {dataProject.map(({id, title, desc, imgpc, imgmobile, cliente, categoria , img1, img2, img3, link}) => {
        return (
          <div key={id} className={`flex`}>
              <CardProject id={id} title={title} desc={desc} imgpc={imgpc} imgmobile={imgmobile} cliente={cliente} categoria={categoria} img1={img1} img2={img2} img3={img3} link={link} />
          </div>
        )
      })}
    </div>
  </section>
);
