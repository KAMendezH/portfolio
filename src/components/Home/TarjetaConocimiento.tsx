import type { IconType } from 'react-icons';

interface Props{
    icono: IconType
    texto: string
}


function TarjetaConocimiento( {icono, texto}: Props ){
    return(
        <span>
            {/* <icono /> */}
            <p>{texto}</p>
        </span>
    );
};

export default TarjetaConocimiento;