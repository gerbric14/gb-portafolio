import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";

export const IconsLogos = ({size}) => (
  <div className="flex sm:justify-center sm:mt-0">
    <a href="#" className="ms-5">
      <ImGithub size={size} className="text-gray-500 hover:text-white" />
    </a>

    <a href="#" className="ms-5">
      <GrLinkedin size={size} className="text-gray-500 hover:text-[#0A66C2]" />
    </a>

    <a href="#" className="ms-5">
      <FaWhatsapp size={size} className="text-gray-500 hover:text-[#25D366]" />
    </a>
  </div>
);
