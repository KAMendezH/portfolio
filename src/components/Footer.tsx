// CSS
import './CSS/Footer.css'
import logo from '../assets/logo.svg'
// COMPONENTS
import SectionContact from './Home/secciones/SectionContact';

// BASELEVEL
import { useBassLevel } from '../context/BassContext';

function Footer(){
    const bassLevel = useBassLevel();

    return(
        <footer className='Footer__content' style={{borderColor: `${bassLevel < 230 && bassLevel > 0 ? "#00ffff" : "transparent"}`}}>
            
            <div className='Footer__containImg'>
                <img className='Footer__logo' src={logo} alt="Logo Asahel Méndez Huerta" style={{filter: `drop-shadow(0 0 5px ${bassLevel > 210 && bassLevel <= 235 ? "#00ffff" : "transparent"}) `}}/>
            </div>
            <div>
                <SectionContact />
            </div>
        </footer>
    );
};

export default Footer;