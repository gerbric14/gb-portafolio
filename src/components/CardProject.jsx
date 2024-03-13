import { useState } from "react";
import { ButtonCard } from "./ButtonCard";
import styles, { layout } from "../data/styles";
import laptop from "../assets/laptop.svg";
import devices from "../assets/devices.svg";


export function CardProject({id, title, desc, imgpc, imgmobile, cliente, categoria, img1, img2, img3 }) {
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
      img1={img1}
      img2={img2}
      img3={img3}
    ></Tab>
  );
}

function Tab({ id, title, desc, imgpc, imgmobile, cliente, categoria, onShow, showMore, img1, img2, img3, }) {

  return (
    <div
      className={`max-w-[384px] rounded-xl overflow-hidden bg-discount-gradient sm:mx-6 my-8`}
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

          {showMore ? (
            <div
              style={{ backgroundImage: `url(${imgpc})` }}
              className="rounded-2xl w-80 h-[320px] bg-no-repeat bg-center transition ease-in-out duration-200 "
            >
              <div className="opacity-0 bg-black/80 rounded-2xl h-full flex flex-col place-content-center items-center group-hover:opacity-100 transition ease-in-out duration-200">
                <h3 className="font-bold text-2xl text-white p-4">{title}</h3>

                <ButtonCard
                  id={id}
                  title={title}
                  desc={desc}
                  imgpc={imgpc}
                  imgmobile={imgmobile}
                  cliente={cliente}
                  categoria={categoria}
                  img1={img1}
                  img2={img2}
                  img3={img3}
                />
              </div>
            </div>
          ) : (
            <div
              style={{ backgroundImage: `url(${imgmobile})` }}
              className="rounded-2xl w-80 h-[320px] bg-no-repeat bg-center transition ease-in-out duration-200"
            >
              <div className="opacity-0 bg-black/80 rounded-2xl h-full flex flex-col place-content-center items-center group-hover:opacity-100 transition ease-in-out duration-200">
                <h3 className="font-bold text-xl text-white p-4">{title}</h3>

                <ButtonCard
                  id={id}
                  title={title}
                  desc={desc}
                  imgpc={imgpc}
                  imgmobile={imgmobile}
                  cliente={cliente}
                  categoria={categoria}
                  img1={img1}
                  img2={img2}
                  img3={img3}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

