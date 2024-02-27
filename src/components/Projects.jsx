import styles from "../data/styles";
import { Card } from "./Card";

export const Projects = () => (
  <section id="proyectos" className={`flex flex-1 flex-col ${styles.marginY}`}>
    
    {/* Grandientes */}
    <div className="absolute z-[0] w-[50%] h-[50%] right-[5%] rounded-full blue__gradient bottom-50" />


    <div className="">
      <h2 className={`${styles.heading2}`}>Proyectos</h2>
      <p className={`${styles.paragraph} mb-4`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quo
        fugit! Accusamus nemo autem repudiandae quae libero! Saepe nulla minima
        ducimus quod culpa dicta? Dolores velit atque quidem quam asperiores.
      </p>
    </div>

    <div className="flex flex-col items-center justify-items-stretch sm:grid sm:grid-cols-2 gap-8 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
      
    </div>
  </section>
);
