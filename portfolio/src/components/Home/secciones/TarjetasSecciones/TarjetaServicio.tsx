// CSS
import './TarjetaServicio.css';
// TYPES
interface PropsTarjetaServicios{
    servicio: string
}

function TarjetaServicio({ servicio }: PropsTarjetaServicios){

    function navegar(servicio: string){
        const mensaje = `Hola, estoy interesado en el servicio sobre ${servicio}`;
        const url = `https://wa.me/525561369256?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    }
    
    return(
        <div className="TarjetaServicio__div__content" onClick={() => { navegar(servicio); }}>
            <h3 className="Tarjeta__div__Servicio__h3" >{ servicio }</h3>
        </div>
    );
};

export default TarjetaServicio;