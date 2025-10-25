// COMPONENTS
import ContentTarjetasServicios from "../../ContentTarjetasServicios";
import TarjetaServicio from "./TarjetasSecciones/TarjetaServicio";
function Marketing(){
    return(
        <ContentTarjetasServicios>
            <TarjetaServicio servicio="Campañas publicitarias" />
            <TarjetaServicio servicio="Gestión de redes sociales" />
            <TarjetaServicio servicio="Creación de contenido publicitario" />
            <TarjetaServicio servicio="Videos cortos" />
        </ContentTarjetasServicios>
    );
};

export default Marketing;