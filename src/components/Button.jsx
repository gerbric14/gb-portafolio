import { layout } from "../data/styles";


const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`${layout.boton} ${styles}`}
  >
    {text}
  </button>
);

export default Button