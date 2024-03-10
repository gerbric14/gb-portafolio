
export const CardTecnologias = ({text, img }) => {
  return (
    <div className=" border border-gray-900 hover:border-cyan-500 rounded-lg p-4 flex flex-col place-content-center items-center w-[95px] h-[120px] transition-all duration-200 ease-in-out opacity-65 grayscale hover:grayscale-0 hover:opacity-100 box-shadow m-1">
      <img
        src={img}
        alt={img}
        width={60}
        height={60}
        className="mb-2"
      />
      <h3 className="text-white mt-2">{text}</h3>
    </div>
  );
};
