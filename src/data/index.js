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
import fcpc from "../assets/fcpc.webp";
import fcm from "../assets/fcmovil.webp";
import hkpc from "../assets/hkpc.webp";

export const navLinks = [
  {
    id: "home",
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
    desc: "App que sirve para la toma de pedidos de cualquier restaurante o quiosco, totalmente adaptable a todas las pantallas y adicional tiene una vista para las ordenes pendientes, excelente para el equipo de cocina visualice los pedidos y complete los realizados.",
    imgpc: fcpc,
    imgmobile: fcm,
    cliente: "Fresh Coffee",
    categoria: "Next App",
  },
  {
    id: 2,
    title: "Planificador de gastos",
    desc: "App que sirve para llevar un registro de los gastos que realizamos y asi tener una vision de nuestras finanzas.",
    imgpc: hkpc,
    imgmobile: fcpc,
    cliente: "Todos",
    categoria: "React App",
  },
];
