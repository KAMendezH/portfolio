// COMPONENTS
import TarjetaServicio from "./TarjetasSecciones/TarjetaServicio";
import ContentTarjetasServicios from '../../ContentTarjetasServicios';
function DesarroWeb(){
    return(
        <ContentTarjetasServicios>
            <TarjetaServicio servicio="Página web"/>
            <TarjetaServicio servicio="Landing Page"/>
            <TarjetaServicio servicio="Aplicación web"/>
            <TarjetaServicio servicio="Invitación digital" />
            <TarjetaServicio servicio="Menú digital" />
            <TarjetaServicio servicio="Portfolio digital" />
        </ContentTarjetasServicios>
    );
}

export default DesarroWeb;