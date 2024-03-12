import { useState } from "react";
import { Modal } from "./Modal";
import { ButtonCard } from "./ButtonCard";
import styles, { layout } from "../data/styles";
import laptop from "../assets/laptop.svg";
import devices from "../assets/devices.svg";


export function CardProject({id, title, desc, imgpc, imgmobile, cliente, categoria }) {
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
      id={id}
      title={title}
      desc={desc}
      imgpc={imgpc}
      imgmobile={imgmobile}
      cliente={cliente}
      categoria={categoria}
      showMore={showMore}
      onShow={handleMoreClick}
      onModal={handleModal}
      modal={modal}
      animar={animar}
    ></Tab>
  );
}

function Tab({ id, title, desc, imgpc, imgmobile, cliente, categoria, onShow, showMore, onModal, modal, animar }) {

  return (
    <div
      className={`rounded-xl overflow-hidden bg-discount-gradient mx-6 sm:mx-4 my-8`}
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
        <div key={id} className="w-full px-2 mb-2 group ">
          {modal && (
            <Modal
              onModal={onModal}
              animar={animar}
              id={id}
              title={title}
              desc={desc}
              imgpc={imgpc}
              imgmobile={imgmobile}
              cliente={cliente}
              categoria={categoria}
            />
          )}
          {showMore ? (
            <div
              style={{ backgroundImage: `url(${imgpc})` }}
              className="rounded-2xl w-96 h-[325px] bg-no-repeat bg-center"
            >
              <div className="opacity-0 bg-black/80 rounded-2xl h-full flex flex-col place-content-center items-center group-hover:opacity-100 transition ease-in-out duration-200">
                <h3 className="font-bold text-2xl text-white p-4">{title}</h3>

                <ButtonCard />
              </div>
            </div>
          ) : (
            <div
              style={{ backgroundImage: `url(${imgmobile})` }}
              className="rounded-2xl w-96 h-[325px] bg-no-repeat bg-center"
            >
              <div className="opacity-0 bg-black/80 rounded-2xl h-full flex flex-col place-content-center items-center group-hover:opacity-100 transition ease-in-out duration-200">
                <h3 className="font-bold text-xl text-white p-4">{title}</h3>

                <ButtonCard />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

