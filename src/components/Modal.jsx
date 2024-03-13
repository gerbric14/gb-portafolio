import { Carousel } from "@material-tailwind/react";
import close from "../assets/close.svg";
import styles, { layout } from "../data/styles";


export const Modal = ({ onModal, animar, title, desc, cliente, categoria, img1, img2, img3 }) => {

  return (
    <div
      id="extralarge-modal"
      className="fixed top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-black/90 "
    >
      {/* Cerrar Modal */}
      <button
        type="button"
        className="bg-transparent box-shadow hover:scale-125 rounded-lg w-8 h-8 ms-auto flex flex-row-reverse justify-center items-center mb-3"
        data-modal-hide="extralarge-modal"
      >
        <img
          src={close}
          alt={close}
          onClick={onModal}
          className="relative top-0 right-0"
        />
      </button>

      {/* Division Modal */}
      <div
        className={`w-[100%] bg-tecnologias rounded-3xl transition-all duration-200 ease-in opacity-0 ${
          animar && "opacity-100"
        } `}
      >
        {/* Galeria Imagenes */}
        <div className="p-4 flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[70%] p-4">

            <Carousel transition={{ duration: 2 }} className="rounded-xl">
              <img
                src={img1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={img2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={img3}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>

          {/* Informacion Proyecto */}
          <div className="w-[100%] md:w-[40%] p-4 flex flex-col md:flex">
            <h2 className="font-bold text-2xl text-white text-center mb-2">{title}</h2>
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

            <div className="mt-10 h-2/3">
              <h3 className="font-bold text-xl text-white">
                Descripción del proyecto:
              </h3>
              <hr className="border border-gray-500 w-full md:w-3/4 mb-3" />
              <p className="text-justify text-gray-300 font-normal mb-4 leading-6">
                {desc}
              </p>
            </div>

            <button
              className={`${layout.boton} ${styles} mt-4 mr-4 w-full sm:w-[50%] hover:bg-[#12253c] hover:border hover:border-cyan`}
            >
              Web Proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
