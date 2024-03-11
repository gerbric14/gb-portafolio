import { Carousel } from "@material-tailwind/react";
import close from "../assets/close.svg";
import imgcard from "../assets/imgcard.webp";
import styles, { layout } from "../data/styles";


export const Modal = ({ onModal, animar }) => {

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
            {/* <img src={imgcard} alt={imgcard} width={650} height={650} /> */}

            <Carousel transition={{ duration: 2 }} className="rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>

          {/* Informacion Proyecto */}
          <div className="w-[100%] md:w-[40%] p-4 flex flex-col md:flex">
            <h3 className="font-bold text-xl text-white">
              Información del proyecto:
            </h3>
            <hr className="border border-gray-500 w-full md:w-3/4 mb-3" />
            <p className="font-semibold text-white">
              Cliente:{" "}
              <span className="text-gray-300 font-normal">Fresh Coffee.</span>
            </p>

            <p className="font-semibold text-white">
              Categoría:{" "}
              <span className="text-gray-300 font-normal">Diseño Web.</span>
            </p>

            <p className="font-semibold text-white">
              Tecnologías:{" "}
              <span className="text-gray-300 font-normal">
                Html5, Css, JavaScript.{" "}
              </span>
            </p>

            <div className="mt-10 h-2/3">
              <h3 className="font-bold text-xl text-white">
                Descripción del proyecto:
              </h3>
              <hr className="border border-gray-500 w-full md:w-3/4 mb-3" />
              <p className="text-justify text-gray-300 font-normal mb-4 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur eligendi voluptas esse! Fuga atque dolores omnis quam
                odit, tempore beatae officiis quis laborum repellat esse
                exercitationem, consectetur dolorem, nesciunt ullam.
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
