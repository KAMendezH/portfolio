// CSS
import '../components/Home/CSS/ContentTarjetasServicios.css'
// REACT
import type { ReactNode } from 'react'
// TYPES
interface PropsContentTarjetasServicios{
    children: ReactNode,
}

function ContentTarjetasServicios({children}: PropsContentTarjetasServicios){
    return(
        <section className='ContentTarjetasServicios__content'>
            {children}
        </section>
    );
};

export default ContentTarjetasServicios;