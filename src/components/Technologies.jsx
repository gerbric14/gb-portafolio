import { dataTecnologias } from "../data";
import styles from "../data/styles";

export const Technologies = () => {

  return (
    <section
      id="tecnologias"
      className={`flex flex-1 flex-col ${styles.marginY}`}
    >
      {/* Grandientes */}
      <div className="absolute z-[0] w-[70%] h-[70%] -left-[50%] rounded-full blue__gradient bottom-50" />
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[50%] rounded-full white__gradient bottom-50" />
      <div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full pink__gradient bottom-50" />

      <div className="">
        <h2 className={`${styles.heading2} text-center sm:text-left font-poppins`}>
          Tecnologías
        </h2>
        <p className={`${styles.paragraph} mb-4 text-justify text-white font-poppins`}>
          En mi viaje por el desarrollo web he cultivado habilidades y una serie
          de experiencias. Mi stack tecnológico incluye:
        </p>
      </div>

      {/*Card Tecnologias  */}
      <div
        className={`my-8 flex flex-wrap place-content-center sm:grid sm:grid-cols-6 gap-2`}
      >
        {dataTecnologias.map(({ id, title, img }) => {
          return (
            <div
              key={id}
              className=" border border-gray-900 hover:border-cyan-500 rounded-lg p-4 flex flex-col place-content-center items-center w-[95px] h-[120px] transition-all duration-200 ease-in-out opacity-65 grayscale hover:grayscale-0 hover:opacity-100 box-shadow m-1"
            >
              <img
                src={img}
                alt={img}
                width={60}
                height={60}
                className="mb-2"
              />
              <h3 className="text-white mt-2">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}



