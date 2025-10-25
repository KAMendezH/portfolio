// CSS
import './CSS/MenuModal.css'
// REACT
import { useNavigate, useLocation } from 'react-router-dom';
// ICONS
import { IoMdClose } from "react-icons/io";
import { VscDebugBreakpointLog } from "react-icons/vsc";
// IMG
import logo from '../assets/logo.svg'
// ELEMENTS
import TextP from "../elements/TextP";

// STORES
import useMenuModal from '../stores/MenuModalStore';
// HOOKS
import { useBassLevel } from '../context/BassContext';


function MenuModal(){
    const bassLevel = useBassLevel();
    const { modalStatus, closeModal } = useMenuModal();
    const navegar = useNavigate();
    const currentLocation = useLocation().pathname;

    return(
        <section className={`MenuModal__content ${modalStatus ? "MenuModalActive" : ""}`} style={{border: `solid 2px ${bassLevel > 230 ? "#00ffff" : "transparent"}`}}>
            <div className='MenuModal__div1'>
                <img className='MenuModal__logo' src={logo} alt="Logo AMH" style={{filter: `drop-shadow(0 0 5px ${bassLevel > 210 && bassLevel <= 235 ? "#00ffff" : "transparent"}) `}}/>
                <span className='MenuModal__cerrarModal' onClick={closeModal}>
                    <IoMdClose />
                    <TextP text="Cerrar"/>
                </span>
               

            </div>
            <div className='MenuModal__div2'>
                <ul className='MenuModal__ul'>
                    <li className={`MenuModal__li ${currentLocation === "/" ?  "MenuModal__li__active" : ""}`}  onClick={()=> {navegar("/"); closeModal()}}><VscDebugBreakpointLog style={{color: ` ${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""} `}}/>Home</li>
                    <li className={`MenuModal__li ${currentLocation === "/about" ? "MenuModal__li__active" : ""}`}  onClick={()=> {navegar("/about"); closeModal()}}><VscDebugBreakpointLog style={{color: ` ${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""} `}}/>About</li>                    
                    <li className={`MenuModal__li ${currentLocation === "/projects" ? "MenuModal__li__active" : ""}`}  onClick={()=> {navegar("/projects"); closeModal()}}><VscDebugBreakpointLog style={{color: ` ${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""} `}}/>Projects</li>
                    <li className={`MenuModal__li ${currentLocation === "/components" ? "MenuModal__li__active" : ""}`}  onClick={()=> {navegar("/components"); closeModal()}}><VscDebugBreakpointLog style={{color: ` ${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""} `}}/>Components</li>
                </ul>
            </div>
        </section>
    );
};

export default MenuModal;