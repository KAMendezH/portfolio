// IMGS
import calculadora from "../assets/imgsProjects/calculadora.jpeg"
import EcoPizzas from "../assets/imgsProjects/EcoPizzas.jpeg"
import InvitacionDigital from "../assets/imgsProjects/Invitaciondigital.jpeg"
import LuzYCafe from "../assets/imgsProjects/LuzYCafe.jpeg"
import MiEstancia from "../assets/imgsProjects/miestancia.jpeg"
import CIMEC from "../assets/imgsProjects/sitiowebCIMEC.jpeg"
import Polaris from "../assets/imgsProjects/Polaris.jpeg"
import bot from '../assets/svgs/svgInstagram.svg'


const projectsData = [
    {
        name: "Calculadora",
        img: calculadora,
        description: "Proyecto de práctica con funciones básicas",
        caracteristicas: "Suma, resta, división, porcentaje",
        tecnologias: "HTML, CSS, JavaScript",
        accion: "enlace",
        enlace: "https://kamendezh.github.io/KAlculator/",
        status: "desplegado"
    },
    {
        name: "Invitación 15 años",
        img: InvitacionDigital,
        description: "Invitación digítal para 15 años",
        caracteristicas: "Cuenta regresiva, galería, ubicación del evento, formulario para confirmar asistencia vía whatsapp",
        tecnologias: "React, JavaScript, TypeScript, JSX, CSS, NodeJs",
        accion: "enlace",
        enlace: "https://invitaciondigitalkamh.netlify.app/",
        status: "desplegado"
    },
    {
        name: "CIMEC - Sitio Web",
        img: CIMEC,
        description: "Sitio web desarrollado para un negocio formado de ingenieron especializados en diversas áreas",
        caracteristicas: "Enlaces de contacto a cada integrante del equipo, Historia, Visión y Misión",
        tecnologias: "React, CSS, JavaScript, NodeJs",
        accion: "enlace",
        enlace: "",
        status: "No disponible"
    },
    {
        name: "Polarbliss - Menú digital",
        img: Polaris,
        decription: "Espacio en linea para negocios pequeños, donde podrán mostrar productos, con su respectivo precio y caracteristicas y ofertas",
        caracteristicas: "Logo y nombre del negocio, espacio de ofertas, enlaces a redes sociales, ubicación con google maps, menú, sistema de pedidos vía whatsapp",
        tecnologias: "React, CSS, JavaScript, NodeJs",
        accion: "enlace",
        enlace: "https://polarbliss.netlify.app/",
        status: "desplegado"
    },
    {
        name: "Luz y Café - Menú digital",
        img: LuzYCafe,
        decription: "Espacio en linea para negocios pequeños, donde podrán mostrar productos, con su respectivo precio y caracteristicas y ofertas",
        caracteristicas: "Logo y nombre del negocio, espacio de ofertas, enlaces a redes sociales, ubicación con google maps, menú, sistema de pedidos vía whatsapp",
        tecnologias: "React, CSS, JavaScript, NodeJs",
        accion: "enlace",
        enlace: "https://luzycafe.netlify.app/",
        status: "desplegado"
    },
    {
        name: "Eco Pizzas - Menú digital",
        img: EcoPizzas,
        decription: "Espacio en linea para negocios pequeños, donde podrán mostrar productos, con su respectivo precio y caracteristicas y ofertas",
        caracteristicas: "Logo y nombre del negocio, espacio de ofertas, enlaces a redes sociales, ubicación con google maps, menú, sistema de pedidos vía whatsapp",
        tecnologias: "React, CSS, JavaScript, NodeJs",
        accion: "enlace",
        enlace: "https://plantillareact.netlify.app/",
        status: "desplegado"
    },
    {
        name: "Mi Estancia",
        img: MiEstancia,
        description: "Plataforma para gestión de departamentos con interfaz pública y de administrador",
        caracteristicas: "Vista pública para ver caracteristicas de los departametnos disponbles, Panel de administrador para agregar/eliminar/editar departamentos, cambiar el estado entre ocupado y disponible",
        tecnologias: "React, TypeScript, CSS, Supabase, NodeJs",
        accion: "enlace",
        enlace: "",
        status: "En desarrollo"
    },
    {
        name: "Bot de Instagram",
        img: bot,
        description: "Inicio de sesión en instagram, simulación de comportamiento humano",
        caracteristicas: "Proyecto de práctica con python y selenium, simulando comportamientos humanos para que el bot no sea detectado.",
        tecnologias: "Python, Selenium",
        accion: "video",
        enlace: "",
        status: "En mantenimiento"
    },
    {
        name: "Bot de Instagram",
        img: bot,
        description: "Bot de instagram para iniciar sesión y eliminar a los 'no seguidores'.",
        caracteristicas: "Bot con comportamientos avanzados para no ser detectado por la seguridad de instagram, activando eventos antes de interactuar con elementos, crea un User-Agent real de windows para engañar al sitio",
        tecnologias: "JavaScript, NodeJs, Puppeteer",
        accion: "video",
        enlace: "",
        status: "En desarrollo"
    }
    
];

export default projectsData;