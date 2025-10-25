// ICONS
import { IoLogoJavascript } from "react-icons/io5";
// COMPONENTES
import TarjetaConocimiento from "./TarjetaConocimiento";
function Conocimientos(){
    return(
        <section>
            <TarjetaConocimiento icono={IoLogoJavascript} texto="JavaScript"/>
        </section>
    );
};

export default Conocimientos;