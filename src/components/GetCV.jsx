import styles from "../data/styles"
import arrowUp from "../assets/arrow-up.svg";

export const GetCV = () => (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primarygb w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Ver</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="h-[23px] w-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Proyectos</span>
        </p>
      </div>
    </div>
  );


