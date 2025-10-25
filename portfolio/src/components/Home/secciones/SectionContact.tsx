// CSS
import '../../Home/CSS/SectionContact.css'
// COMPONENTS
import TarjetaRedSocial from "./TarjetasSecciones/TarjetaRedSocial";



function SectionContact(){
    return(
        <section className='SectionContanct__content'>
            <h1 className='SectionContact__text'>Contacto</h1>
            <div className="SectionContact__enlaces">
                <TarjetaRedSocial text="Facebook 1" icon="facebook"/>
                <TarjetaRedSocial  text="Facebook 2" icon="facebook"/>
                <TarjetaRedSocial text="Whatsapp" icon="whatsapp" />
                <TarjetaRedSocial text="GitHub" icon="github" />
                <TarjetaRedSocial text="Linkedin" icon="linkedin" />
            </div>
                
        </section>
    );
};

export default SectionContact;