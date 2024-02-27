import { layout } from "../data/styles";

const ButtonImg = ({ styles, text, img }) => (
  <button type="button" className={`${layout.boton} ${styles} `}>
    {text}
    <img src={img} alt={img} height={"25px"} width={"25px"} className="ml-1" />
  </button>
);

export default ButtonImg;
