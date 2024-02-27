import styles, { layout } from "../data/styles";
import { useForm } from "../hooks/useForm";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Contact = () => {

  const referenceForm = useRef()

  const {formState, onInputChange, nombre, apellido, telefono, email, mensaje, onResetForm } = useForm({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      
        const serviceId = "service_xr58zdj";
        const templateId = "template_l322qes";
        const apikey = "bljRmuICZsNfJVsng";

        emailjs
          .sendForm(serviceId, templateId, referenceForm.current, apikey)
          .then((result) => {
            result.text === "OK" &&
              toast.success("Datos enviados correctamente", {
                position: "bottom-center",
                autoClose: 5000,
              });
          })
          .catch((error) => {
            error.text === 'error' &&
              toast.error("Hubo un error, intente de nuevo", {
                position: "bottom-center",
                autoClose: 5000,
              });
          });
    
        onResetForm();
  }

  return (
    <section
      id="contacto"
      className={`flex flex-1 flex-col md:flex-row ${styles.marginY}`}
    >
      {/* Grandientes */}
      <div className="absolute z-[0] w-[70%] h-[70%] -left-[50%] rounded-full blue__gradient bottom-50" />
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[50%] rounded-full white__gradient bottom-50" />
      <div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full pink__gradient bottom-50" />

      <div className="md:max-w-[40%]">
        <h2 className={`${styles.heading2}`}>Contáctame</h2>
        <p className={`${styles.paragraph} mb-4`}>
          De la mano con las tecnologías de hoy en día crearemos páginas únicas
          he increíbles adaptadas a todo tipo de pantalla y a tus necesidades.
          ¿Qué esperas? Contáctame y hagamos realidad eso que estas imaginando.
        </p>
      </div>

      <form
        ref={referenceForm}
        onSubmit={handleSubmit}
        className="mx-auto w-full md:max-w-xl py-4 px-4 "
      >
        <div className="grid sm:grid-cols-2 sm:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="nombre"
              id="nombre"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={nombre}
              onChange={onInputChange}
              required
              autoComplete="off"
              minLength={3}
              maxLength={15}
            />

            <label htmlFor="nombre" className={`${layout.labelContact}`}>
              Nombre
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="apellido"
              id="apellido"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={apellido}
              onChange={onInputChange}
              required
              autoComplete="off"
              minLength={3}
              maxLength={15}
            />

            <label htmlFor="apellido" className={`${layout.labelContact}`}>
              Apellido
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="telefono"
              id="telefono"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={telefono}
              onChange={onInputChange}
              required
              autoComplete="off"
              minLength={10}
              maxLength={12}
            />

            <label htmlFor="telefono" className={`${layout.labelContact}`}>
              Teléfono
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={email}
              onChange={onInputChange}
              required
              autoComplete="off"
            />

            <label htmlFor="email" className={`${layout.labelContact}`}>
              Email
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="mensaje"
            className="font-poppins block mb-2 text-sm font-medium text-white"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            className="font-poppins block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-white placeholder-gray-400 focus:ring-cyan focus:border-cyan"
            placeholder="Coméntame sobre tu idea"
            value={mensaje}
            onChange={onInputChange}
            required
            minLength={10}
            maxLength={255}
          ></textarea>
        </div>

        <button
          className={`${layout.boton} ${styles} mr-4 w-full text-gray-800 sm:w-[50%]`}
        >
          Envíar!
        </button>
        <ToastContainer />
      </form>
    </section>
  );

}
