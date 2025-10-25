// CSS
import './CSS/Certificates.css'

// COMPONENTS
import TarjetaCertificates from './TarjetaCertificates';

// ARCHIVOS
import diplomaCSS from '../../assets/certificados/diplomaCSS.pdf';
import diplomaHTML from '../../assets/certificados/diplomaHTML.pdf';
import diplomaJavaScript from '../../assets/certificados/diplomaJavaScript.pdf';
import diplomaREACT from '../../assets/certificados/diplomaREACT.pdf';
import Reconocimiento from '../../assets/certificados/Reconocimiento.pdf';
import diplomaRreactUdemy from '../../assets/certificados/diplomaReactUdemy.pdf';
import diplomaCiberseguridad from '../../assets/certificados/ciberseguridadPython.pdf';


function Certificates(){
    return(
        <section className='Certificates__content'>
            <h1 className='Certificates__title'>Certificados</h1>
            <div className='Certificates__contenedor'>
                <TarjetaCertificates institucion='Utel'    nombreCertificado='Emprendimiento - Creación de la empresa' archivo={Reconocimiento}/>
                <TarjetaCertificates institucion='Ademass' nombreCertificado='Certificado de HTML' archivo={diplomaHTML}/>
                <TarjetaCertificates institucion='Ademass' nombreCertificado='Certificado de CSS' archivo={diplomaCSS}/>
                <TarjetaCertificates institucion='Ademass' nombreCertificado='Certificado de Javascript' archivo={diplomaJavaScript} />
                <TarjetaCertificates institucion='Ademass' nombreCertificado='Certificado de React' archivo={diplomaREACT} />
                <TarjetaCertificates institucion='Udemy' nombreCertificado='Certificado de React y TypeScript' archivo={diplomaRreactUdemy} />
                <TarjetaCertificates institucion='Udemy' nombreCertificado='Certificado Ciberseguridad con Python' archivo={diplomaCiberseguridad} />
            </div>
        </section>
    );
};

export default Certificates;