import { useState } from "react";
import styles, { layout } from "../data/styles";
import imgcard from "../assets/imgcard.webp";
import laptop from "../assets/laptop.svg";
import devices from "../assets/devices.svg";
import js from "../assets/js2.jpg";
import { Modal } from "./Modal";
import { Button } from "@material-tailwind/react";

export function CardProject({ title, desc }) {
  const [showMore, setShowMore] = useState(true);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);

  const handleModal = () => {
    setModal(!modal);

    setTimeout(() => {
      setAnimar(!animar)    
    }, 250);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Tab
      title={title}
      desc={desc}
      showMore={showMore}
      onShow={handleMoreClick}
      onModal={handleModal}
      modal={modal}
      animar={animar}
    ></Tab>
  );
}

function Tab({ title, desc, onShow, showMore, onModal, modal, animar }) {

  return (
    <div
      className={`max-w-sm rounded-xl overflow-hidden bg-discount-gradient ${styles.marginX} my-8`}
    >
      <div className="flex flex-col">
        {/* Boton Icono */}
        <div className="flex justify-center">
          <button
            className={`${layout.boton} ${styles} hover:bg-black/20 hover:border-black/20`}
            onClick={onShow}
          >
            {showMore ? (
              <img src={devices} alt={devices} />
            ) : (
              <img src={laptop} alt={laptop} />
            )}
          </button>
        </div>

        {/* Imagen */}
        <div className="w-full px-2 mb-2 group ">
          {modal && <Modal onModal={onModal} animar={animar} />}
          {showMore ? (
            <div
              style={{ backgroundImage: `url(${js})` }}
              className="rounded-2xl w-80 h-40 "
            >
              <div className="opacity-0 bg-black/80 rounded-2xl h-full flex flex-col place-content-center items-center group-hover:opacity-100 transition ease-in-out duration-200">
                <h3 className="font-bold text-2xl text-white p-4">
                  Titulo Proyecto
                </h3>

                <Button
                  variant="outline"
                  color="blue-gray"
                  className="flex gap-2 font-semibold text-white hover:scale-105 mt-6"
                  onClick={onModal}
                >
                  Ver Proyecto{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ) : (
            <div
              style={{ backgroundImage: `url(${js})` }}
              className="rounded-2xl w-80 h-40 "
            >
              <div className="opacity-0 bg-black/80 rounded-2xl h-full flex flex-col place-content-center items-center group-hover:opacity-100 transition ease-in-out duration-200">
                <h3 className="font-bold text-xl text-white p-4">
                  Titulo Proyecto
                </h3>

                <Button
                  variant="outline"
                  color="blue-gray"
                  className="flex gap-2 font-semibold text-white hover:scale-105 mt-6"
                  onClick={onModal}
                >
                  Ver Proyecto{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

