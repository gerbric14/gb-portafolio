import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDataForm } from "../hooks/useDataForm";
import styles, { layout } from "../data/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";


export const Contact = () => {
  const referenceForm = useRef();

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const { nombre, apellido, telefono, email, mensaje, onInputChange, onResetForm, } =  useDataForm({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const onSubmit = () => {

    const serviceId = "service_xr58zdj";
    const templateId = "template_l322qes";
    const apikey = "bljRmuICZsNfJVsng";

    emailjs
      .sendForm(serviceId, templateId, referenceForm.current, apikey)
      .then((result) => {
        result.text === "OK" &&
          toast.success("Datos enviados correctamente", {
            position: "top-center",
            autoClose: 5000,
          });
      })
      .catch((error) => {
        error.text === "error" &&
          toast.error("Hubo un error, intente de nuevo", {
            position: "top-center",
            autoClose: 5000,
          });
      });

    onResetForm();
  };

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
        <h2 className={`${styles.heading2} text-center sm:text-left`}>
          Contáctame
        </h2>
        <p className={`${styles.paragraph} mb-4 text-justify text-white`}>
          ¿Listo para hacer realidad tu sitio web? ¡Haz que tus ideas cobren
          vida en la web ahora mismo! <br />
          Contáctame y juntos crearemos el sitio web que refleja tu visión y
          conecta con tu audiencia de manera impactante, con diseños totalmente
          responsivos (adaptados a todo tipo de pantalla), por lo que tus
          usuarios podrán usarlo desde cualquier dispositivo móvil o escritorio.{" "}
          <br />
          ¿Qué esperas? El momento es ahora.
        </p>
      </div>

      <form
        ref={referenceForm}
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full md:max-w-xl py-4 px-4 my-auto"
      >
        <div className="grid sm:grid-cols-2 sm:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("nombre", {
                required: true,
                minLength: 3,
                maxLength: 16,
                pattern: /^([a-záéíóúüñA-ZÁÉÍÓÚÜÑ]*)$/,
              })}
              name="nombre"
              id="nombre"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={nombre}
              onChange={onInputChange}
              autoComplete="off"
              maxLength={16}
            />
            <p className="text-red-500 font-normal">
              {errors.nombre?.type === "required" &&
                "El campo nombre es obligatorio"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.nombre?.type === "minLength" &&
                "El campo nombre requiere un mínimo de 6 letras"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.nombre?.type === "maxLength" &&
                "El campo nombre soporta máximo 16 letras"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.nombre?.type === "pattern" &&
                "El campo nombre admite solo letras, sin espacios"}
            </p>

            <label htmlFor="nombre" className={`${layout.labelContact}`}>
              Nombre
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("apellido", {
                required: true,
                minLength: 3,
                maxLength: 16,
                pattern: /^([a-záéíóúüñA-ZÁÉÍÓÚÜÑ]*)$/,
              })}
              name="apellido"
              id="apellido"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={apellido}
              onChange={onInputChange}
              autoComplete="off"
              maxLength={16}
            />
            <p className="text-red-500 font-normal">
              {errors.apellido?.type === "required" &&
                "El campo apellido es obligatorio"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.apellido?.type === "minLength" &&
                "El campo apellido requiere un mínimo de 6 letras"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.apellido?.type === "maxLength" &&
                "El campo apellido soporta máximo 16 letras"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.apellido?.type === "pattern" &&
                "El campo apellido admite solo letras, sin espacios"}
            </p>

            <label htmlFor="apellido" className={`${layout.labelContact}`}>
              Apellido
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              {...register("telefono", {
                required: true,
                minLength: 10,
                maxLength: 12,
                pattern: /^([0-9]*)$/,
              })}
              name="telefono"
              id="telefono"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={telefono}
              onChange={onInputChange}
              autoComplete="off"
              maxLength={12}
            />
            <p className="text-red-500 font-normal">
              {errors.telefono?.type === "required" &&
                "El campo teléfono es obligatorio"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.telefono?.type === "minLength" &&
                "El campo teléfono requiere un mínimo de 10 números"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.telefono?.type === "maxLength" &&
                "El campo teléfono soporta máximo 12 números"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.telefono?.type === "pattern" &&
                "El campo teléfono solo admite números, ejemplo: 0123456789"}
            </p>

            <label htmlFor="telefono" className={`${layout.labelContact}`}>
              Teléfono
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
              name="email"
              id="email"
              className={`${layout.inputContact}`}
              placeholder=" "
              value={email}
              onChange={onInputChange}
              autoComplete="off"
            />
            <p className="text-red-500 font-normal">
              {errors.email?.type === "required" &&
                "El campo email es obligatorio"}
            </p>
            <p className="text-red-500 font-normal">
              {errors.email?.type === "pattern" &&
                "El campo email no cumple el formato admitido, ejemplo: correo@correo.com"}
            </p>

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
            {...register("mensaje", {
              required: true,
              minLength: 10,
              maxLength: 255,
            })}
            name="mensaje"
            rows="4"
            className={`${layout.inputArea}`}
            placeholder="Coméntame sobre tu idea"
            value={mensaje}
            onChange={onInputChange}
          ></textarea>

          <p className="text-red-500 font-normal">
            {errors.mensaje?.type === "required" &&
              "El campo mensaje es obligatorio"}
          </p>
          <p className="text-red-500 font-normal">
            {errors.mensaje?.type === "minLength" &&
              "El campo mensaje requiere un mínimo de 10 carácteres"}
          </p>
          <p className="text-red-500 font-normal">
            {errors.mensaje?.type === "maxLength" &&
              "El campo mensaje soporta máximo 255 carácteres"}
          </p>
        </div>

        <button
          className={`${layout.boton} ${styles} mr-4 w-full sm:w-[50%] hover:bg-[#12253c] hover:border hover:border-cyan `}
        >
          Envíar
        </button>

        <ToastContainer />
      </form>
    </section>
  );
}
