// CSS
import './ModalServices.css';
// STORES
import useModalSeriviciosStore from '../../stores/ModalServiciosStore';
// ICONS
import { IoMdClose } from "react-icons/io";
// COMPONENTS
import DesarroWeb from '../Home/secciones/DesarrolloWeb';
import Marketing from '../Home/secciones/Marketing';
function ModalServices(){
    const { statusModal, closeModal, seccion } = useModalSeriviciosStore();

    return(
        <section className={`ModalServices__content ${statusModal ? "ModalServices__content--active" : ""}`}>
            <div className='ModalServices__div'>
                <div className='ModalServices__div__title'>
                    <h2 className = 'ModalServices__h2' >{seccion}</h2>
                    <IoMdClose className='ModalServices__icon' onClick={closeModal}/>
                </div>
                <div>
                    {
                        seccion === "Desarrollo Web" 
                        ? <DesarroWeb />
                        : seccion === "Marketing Digital"
                        ? <Marketing />
                        : ""
                    }
                </div>
            </div>
        </section>
    );
};

export default ModalServices;