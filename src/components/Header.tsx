
// css
import './CSS/Header.css'
// ELEMENTS
import TextP from '../elements/TextP';
// IMG
import logo from '../assets/logo.svg'
// REACT-ROUTER-DOM
import { NavLink, useLocation } from 'react-router-dom'
// ICONS
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";

// STORES
import useStatusMusic from '../stores/PlayerMusicStore';
import useMenuModal from '../stores/MenuModalStore';

// HOOKS
import { useBassLevel } from '../context/BassContext';

function Header(){
    const ubicacion = useLocation().pathname;
    const bassLevel = useBassLevel();
    const { status, open, close } = useStatusMusic();
    const { openModal } = useMenuModal();
    console.log(ubicacion)
    return(
    <header className='Header__header'>
            
        <div className='Header__div__logo'>
            <img className='Header__logo' src={logo} style={{filter: "drop-shadow(0 0 5px #00ffff)"}}/>
            <div onClick={status ? close : open} className='Header__div__iconsMusic'>
                {
                    !status ? <IoEyeSharp className='Header__icons'/> : <FaEyeSlash className='Header__icons'/>
                }
                <TextP text={!status ? "Mostrar" : "Ocultar"}/>
            </div>
            <div className='Header__div__iconsMusic div__openModal' onClick={openModal}>
                <MdMenuOpen className='Header__icons'/>
                <TextP text='Menú'/>
            </div>
        </div>
        
        <nav className='Header__nav'>
            <NavLink className={`Header__NavLink ${ubicacion === "/" ? "Header__NavLink__active" : ""}`} to={"/"}>Home</NavLink>
            <NavLink className={`Header__NavLink ${ubicacion === "/about" ? "Header__NavLink__active" : ""}`} to={"/about"}>About</NavLink>
            <NavLink className={`Header__NavLink ${ubicacion === "/projects" ? "Header__NavLink__active" : ""}`} to={"/projects"}>Projects</NavLink>
            <NavLink className={`Header__NavLink ${ubicacion === "/components" ? "Header__NavLink__active" : ""}`} to={"/components"}>Components</NavLink>
        </nav>
    </header>
    );
};


export default Header;