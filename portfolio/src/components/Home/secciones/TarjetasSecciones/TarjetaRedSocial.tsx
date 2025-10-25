// CSS
import './TarjetaRedSocial.css'
// ICONS
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
// BASSLEVEL
import { useBassLevel } from '../../../../context/BassContext';
// TYPES
interface redesPersonalesProps{
    text: string,
    icon: string
}

function TarjetaRedSocial({ text, icon }:redesPersonalesProps){
    const bassLevel = useBassLevel();

    return(
        <span className='TarjetaRedSocial__content'>
            {
                icon === "facebook"
                ? <FaFacebook style={{color: `${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""}`}}/>
                : icon === "whatsapp"
                ? <FaWhatsapp style={{color: `${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""}`}}/>
                : icon === "github"
                ? <FaGithub style={{color: `${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""}`}}/>
                : icon === "linkedin"
                ? <FaLinkedin style={{color: `${bassLevel >= 200 && bassLevel <= 227 ? "#00ffff" : ""}`}}/>
                : ""
            }
            <p>{ text }</p>
        </span>
    );
};

export default TarjetaRedSocial;