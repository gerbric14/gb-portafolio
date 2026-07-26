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
// IMAGENES PROYECTOS
import psmovil from "../assets/305PS-Mobile.webp";
import pspc from "../assets/305PS-Desktop.webp";
import gastospc from "../assets/gastospc.webp";
import gastosm from "../assets/gastosm.webp";
import gastos1 from "../assets/gastos1.webp";
import gastos2 from "../assets/gastos2.webp";
import gastos3 from "../assets/gastos3.webp";
import ps1 from "../assets/305PS.webp";
import ps2 from "../assets/305PS-2.webp";
import ps3 from "../assets/305PS-3.webp";


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
    title: "305 Pool Services",
    desc: "305 Pool Services es una empresa de mantenimiento de piscinas en Florida. El proyecto partió de un objetivo concreto: convertir visitantes en clientes. Para lograrlo, se presentan con claridad los servicios ofrecidos, una galería que muestra resultados reales de su trabajo, testimonios que generan confianza y un formulario de contacto que facilita el primer paso. El resultado es un sitio moderno, rápido y totalmente responsivo, pensado tanto para verse impecable en cualquier dispositivo como para impulsar el crecimiento del negocio.",
    imgpc: pspc,
    imgmobile: psmovil,
    cliente: "305 Pool Services",
    categoria: "Landing Page",
    img1: ps1,
    img2: ps2,
    img3: ps3,
    link: "https://305poolservices.com",
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
