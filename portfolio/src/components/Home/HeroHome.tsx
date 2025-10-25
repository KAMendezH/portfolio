// CSS
import './CSS/HeroHome.css'
// COMPONENTS
import TextP from '../../elements/TextP';
// ICONS
import { FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaWordpress, FaBootstrap } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiTypescript, SiPostgresql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
// MOTION

function HeroHome(){


    // Para guardar una referencia al icono y no el componente, se puede usar solo el nombre
    // FaHtml5  en lugar de <FaHtml5 /> esto para poder asigarle clases y estilizar los iconos
    const icons = [  FaHtml5, FaCss3Alt, IoLogoJavascript, FaNodeJs, SiMongodb, FaReact];
    const icons2 = [RiSupabaseFill, SiTypescript, SiPostgresql, FaPython, FaWordpress, FaBootstrap]
    return(
        <section className="HeroHome__content">
            <div className='HeroHome__icons HeroHome__div1'>
                {
                    icons.map((Icon, index) => (
                        <span key={index}>{<Icon  className='HeroHome__Tech__Icons'/>}</span>
                    ))
                }
            </div>
            <div>
                <h1 className='HeroHome__name'>Asahel Méndez Huerta</h1>
                <TextP text='Pasante de Ingenieria en Sistemas Computacionales'/>
            </div>
            <div className='HeroHome__icons HeroHome__div2'>
                {
                    icons2.map((Icon, index) => (
                        <span key={index}>{<Icon className='HeroHome__Tech__Icons'/>}</span>
                    ))
                }
            </div>
        </section>
    );
};

export default HeroHome;