// TYPES
interface Props{
    texto: string
}


function TarjetaConocimiento( {texto}: Props ){
    return(
        <span>
            {/* <icono /> */}
            <p>{texto}</p>
        </span>
    );
};

export default TarjetaConocimiento;