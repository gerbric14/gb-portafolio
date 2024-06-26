// IMAGENES TECNOLOGIAS-LOGOS
import js from '../assets/Logos/JavaScript.webp'
import html from '../assets/Logos/LogoHtml.webp'
import css from '../assets/Logos/LogoCss.webp'
import react from '../assets/Logos/LogoReact.webp'
import tailwind from '../assets/Logos/LogoTailwind.webp'
import node from '../assets/Logos/LogoNode.webp'
import next from '../assets/Logos/LogoNextJs.webp'
import bootstrap from '../assets/Logos/LogoBootstrap.webp'
import github from '../assets/Logos/LogoGitHub.webp'
import git from '../assets/Logos/LogoGit.webp'
import postgresql from '../assets/Logos/LogoPostgreSQL.webp'
import mongo from '../assets/Logos/LogoMongoDB.webp'
import strapi from '../assets/Logos/LogoStrapi.webp'
// IMAGENES PROYECTOS
import fcmovil from "../assets/fcmovil.webp";
import fcpc from "../assets/fcpc.webp";
import gastospc from "../assets/gastospc.webp";
import gastosm from "../assets/gastosm.webp";
import gastos1 from "../assets/gastos1.webp";
import gastos2 from "../assets/gastos2.webp";
import gastos3 from "../assets/gastos3.webp";
import fc1 from "../assets/fc1.webp";
import fc2 from "../assets/fc2.webp";
import fc3 from "../assets/fc3.webp";


export const navLinks = [
  {
    id: "inicio",
    title: "Inicio",
  },
  {
    id: "tecnologias",
    title: "Tecnologías",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

export const dataTecnologias = [
  {
    id: 1,
    title: "HTML",
    img: html,
  },
  { id: 2, title: "Css", img: css },
  {
    id: 3,
    title: "JavaScript",
    img: js,
  },
  {
    id: 4,
    title: "React",
    img: react,
  },
  {
    id: 5,
    title: "NodeJs",
    img: node,
  },
  {
    id: 6,
    title: "NextJs",
    img: next,
  },
  {
    id: 7,
    title: "TailwindCss",
    img: tailwind,
  },
  {
    id: 8,
    title: "Bootstrap",
    img: bootstrap,
  },
  {
    id: 9,
    title: "MongoDb",
    img: mongo,
  },
  {
    id: 10,
    title: "PostgreSQL",
    img: postgresql,
  },
  {
    id: 11,
    title: "Git",
    img: git,
  },
  {
    id: 12,
    title: "GitHub",
    img: github,
  },
];

export const dataProject = [
  {
    id: 1,
    title: "Restaurant App",
    desc: "Aplicación diseñada para facilitar la toma de pedidos en restaurantes, con total adaptabilidad a cualquier dispositivo. Incluye una vista especial para gestionar pedidos pendientes, lo que permite al equipo de cocina visualizar y completar los pedidos de manera eficiente.",
    imgpc: fcpc,
    imgmobile: fcmovil,
    cliente: "Fresh Coffee",
    categoria: "Next App",
    img1: fc1,
    img2: fc2,
    img3: fc3,
    link: "https://quioscofreshcoffee.vercel.app/",
  },
  {
    id: 2,
    title: "Planificador de gastos",
    desc: "Aplicación diseñada para mantener un seguimiento detallado de tus gastos, brindándote una perspectiva clara de tu situación financiera.",
    imgpc: gastospc,
    imgmobile: gastosm,
    cliente: "CB Group",
    categoria: "React App",
    img1: gastos1,
    img2: gastos2,
    img3: gastos3,
    link: "https://controlgastos-gb.vercel.app/",
  },
];
