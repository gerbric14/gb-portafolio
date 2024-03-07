import { layout } from "../data/styles";


const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`${layout.boton} ${styles} transition-colors ease-out duration-300 `}
  >
    {text}
  </button>
);

export default Button