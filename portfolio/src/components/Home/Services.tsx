// CSS
import './CSS/Services.css'

// COMPONENTS
import TarjetaServicios from "./TarjetaServicios";
// IMG
import svgDesarrolloWeb from '../../assets/svgs/desarrolloWeb.svg'
import svgMarketingDigital from '../../assets/svgs/marketing.svg'
import svgLogos from '../../assets/svgs/logos.svg'
import svgVideos from '../../assets/svgs/edicion.svg'

function Services(){
    return(
        <section className='Services__content'>
            <h1 className='Services__text'>Services</h1>
            <div className='Services__div__tarjetas'>
                <TarjetaServicios img={svgDesarrolloWeb} servicio="Desarrollo Web" />
                <TarjetaServicios img={svgMarketingDigital} servicio='Marketing Digital' />
                <TarjetaServicios img={svgLogos} servicio='Creación de logotipo'/>
                <TarjetaServicios img={svgVideos} servicio='Edición de videos'/>
            </div>
        </section>
    );
};

export default Services;