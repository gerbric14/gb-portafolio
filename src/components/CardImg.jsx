import { useState } from "react";
import styles, {layout} from "../data/styles";
import logojs from "../assets/JSLogo.webp";
import imgcard from "../assets/imgcard.webp";
import laptop from "../assets/laptop.svg";
import devices from "../assets/devices.svg";


export function CardImg({title, desc}) {
  const [showMore, setShowMore] = useState(true);

    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
  return (
      <Tab
        title={title}
        desc={desc}
        showMore={showMore}
        onShow={handleMoreClick}
      ></Tab>
  );
}

function Tab({
  title,
  desc,
  onShow,
  showMore,
}) {
  return (
    <div
      className={`max-w-sm rounded-xl overflow-hidden bg-dimWhite 
       ${styles.marginY} ${styles.marginX}`}
    >
      <div className="flex flex-col">
      {/* Boton Icono */}
        <div className="flex justify-center">
          <button className={`${layout.boton} ${styles}`} onClick={onShow}>
            {showMore ? (
              <img src={devices} alt={devices} />
              ) : (
              <img src={laptop} alt={laptop} />
            )}
          </button>
        </div>

        {/* Imagen */}
        <div className="w-full px-6 bg-cyan">
          {showMore ? (
            <img
              src={logojs}
              alt={logojs}
              width={400}
              height={400}
              className="rounded-2xl my-1 transition ease-out duration-200"
            />
          ) : (
            <img
              src={imgcard}
              alt={imgcard}
              width={400}
              height={400}
              className="rounded-2xl my-1 transition ease-out duration-200"
            />
          )}
        </div>

        <div className="px-6 py-2 flex-auto bg-red-500">
          {/* Titulo */}
          <h3 className="font-bold text-xl mb-2 text-[#145b88] mt-3">
            {title}
          </h3>
            {/* Descripcion */}
            <p className="text-base text-primarygb">{desc} </p>
        </div>

          {/* Etiquetas */}
        <div className="px-6 pt-4 pb-2 flex-none">
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
            #JavaScritp
          </span>
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-normal text-primary gb mr-2 mb-2">
            #TailwindCss
          </span>
        </div>

            {/* Boton */}
        <div className="px-6 py-2">
          <a
            href="#"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 mb-2"
          >
            Ver más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
