import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Modal } from "./Modal";

export const ButtonCard = () => {
     const [modal, setModal] = useState(false);
     const [animar, setAnimar] = useState(false);

     const handleModal = () => {
       setModal(!modal);

       setTimeout(() => {
         setAnimar(!animar);
       }, 250);
     };

     return (
        <>
        {modal && <Modal onModal={handleModal} animar={animar} />}
        
         <Button
            variant="outlined"
            color="blue-gray"
            className="flex gap-2 font-semibold text-white hover:scale-105 mt-6"
            onClick={handleModal}
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
        </>
  );
};
