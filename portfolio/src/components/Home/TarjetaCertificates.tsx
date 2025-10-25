// CSS
import './CSS/TarjetaCertificates.css'

// TYPES
interface CertificatesProps{
    institucion: string,
    nombreCertificado: string,
    archivo: string
}




function TarjetaCertificates( {institucion, nombreCertificado, archivo}:CertificatesProps ){
    function handleClick(enlace:string):void{
        window.open(enlace, "_blank")
    }


    return(
        <section className='TarjetaCertificates__content'>
            <div className='TarjetaCertificates__div__institucion'>
                <h4>{institucion}</h4>
            </div>
            <div className='TarjetaCertificates__div__nombreCertificado'>
                <h1 className='TarjetaCertificates__nombreCertificado__text'>{nombreCertificado}</h1>
            </div>
            <div className='TarjetaCertificates__div__boton'>
                <span onClick={()=>{handleClick(archivo)}}>Abrir</span>
            </div>
        </section>
    );
};

export default TarjetaCertificates;