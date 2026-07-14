import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Carousel } from "@material-tailwind/react";
import close from "../assets/close.svg";
import { layout } from "../data/styles";


export const Modal = ({ onModal, animar, title, desc, cliente, categoria, img1, img2, img3, link }) => {

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
      {/* Caja Modal */}
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-tecnologias rounded-3xl transition-all duration-150 ease-in opacity-0 ${
          animar && "opacity-100"
        } `}
      >
        {/* Cerrar Modal */}
        <button
          type="button"
          onClick={onModal}
          className="absolute top-3 right-3 z-10 bg-transparent box-shadow hover:scale-125 rounded-lg w-8 h-8 flex justify-center items-center"
        >
          <img src={close} alt="Cerrar" />
        </button>

        {/* Galeria Imagenes */}
        <div className="p-4 flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[70%] p-4">
            <Carousel transition={{ duration: 2 }} className="rounded-xl h-[35vh] md:h-[55vh]">
              <img
                src={img1}
                alt={`${title} - captura 1`}
                className="h-full w-full object-contain"
              />
              <img
                src={img2}
                alt={`${title} - captura 2`}
                className="h-full w-full object-contain"
              />
              <img
                src={img3}
                alt={`${title} - captura 3`}
                className="h-full w-full object-contain"
              />
            </Carousel>
          </div>

          {/* Informacion Proyecto */}
          <div className="w-[100%] md:w-[40%] p-4 flex flex-col md:flex">
            <h2 className="font-bold text-2xl text-white text-center mb-2">
              {title}
            </h2>
            <h3 className="font-bold text-xl text-white">
              Información del proyecto:
            </h3>
            <hr className="border border-gray-500 w-full md:w-3/4 mb-3" />

            <p className="font-semibold text-white">
              Cliente:{" "}
              <span className="text-gray-300 font-normal">{cliente}</span>
            </p>

            <p className="font-semibold text-white">
              Categoría:{" "}
              <span className="text-gray-300 font-normal">{categoria}</span>
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-xl text-white">
                Descripción del proyecto:
              </h3>
              <hr className="border border-gray-500 w-full md:w-3/4 mb-3" />
              <p className="text-justify text-gray-300 font-normal mb-4 leading-6">
                {desc}
              </p>
            </div>

            <button
              className={`${layout.boton} mt-4 mr-4 w-full sm:w-[50%] hover:bg-[#12253c] hover:border hover:border-cyan`}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                Web Proyecto
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
