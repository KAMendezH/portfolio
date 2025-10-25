// CSS
import './CSS/TarjetaServicios.css'
// STORES
import useModalSeriviciosStore from '../../stores/ModalServiciosStore'
// BASSLEVEL
import { useBassLevel } from '../../context/BassContext'
interface PropsServices{
    img: string
    servicio: string
}

function TarjetaServicios({img, servicio }:PropsServices){
    const { setSeccion, openModal } = useModalSeriviciosStore();
    const bassLevel = useBassLevel();
    
    function navegar(servicio:string){
        const mensaje = `Hola, quiero cotizar para el servicio de "${servicio}"`
        const url = `https://wa.me/525561369256?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank")
    }

    
    // console.log("bassLevel: ", bassLevel, bassLevel >= 190 && bassLevel <= 214)
    return(
        <div onClick={servicio !== "Creación de logotipo" && servicio !== "Edición de videos" ? () => { setSeccion(servicio); openModal(); } : () =>  navegar(servicio) } className='TarjetaServicio__content' style={{ border : `solid 2px ${bassLevel >= 190 && bassLevel <= 214 ? "#00ffff" : "#fff"} 15px`}}>
            <div className='TarjetaServicio__div__1'>
                <img className='TarjetaServicios__img' src={img} alt={`Imagen sobre el servicio de ${servicio}`} />
            </div>
            <div className='TarjetaServicio__div__2'>
                <h3 className='TarjetaServicio__text'>{servicio}</h3>
            </div>
        </div>
    );
};

export default TarjetaServicios;