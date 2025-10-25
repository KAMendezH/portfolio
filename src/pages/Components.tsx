// CSS
import './CSS/Components.css'
// IMG
import enConstruccion from '../assets/svgs/enconstruccion.svg'
function Components(){
    return(
        <section className="Components__container">
            {/* <h1 className="Components__title">Components</h1> */}
            <div>
                <h4 className='Components__title'>Próximamente</h4>
                <div className='Components__contenedorImg'>
                    <img className='Components__img' src={enConstruccion} />
                </div>
            </div>
        </section>
    );
};

export default Components;