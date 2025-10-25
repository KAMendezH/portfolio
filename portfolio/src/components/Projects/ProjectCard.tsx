// CSS
import './CSS/ProjectCard.css';

// TYPES
interface ProjectCardProps{
    name: string,
    img: string,
    caracteristicas: string,
    tecnologias: string,
    accion: string,
    enlace: string,
    status: string
}

function ProjectCard({ name, img, caracteristicas, tecnologias, accion, enlace, status }:ProjectCardProps){



    function navigate(urlProject:string){
        window.open(urlProject, "_blank");
    }
    return(
        <section className="TarjectCard__main">
            <h4 className='TarjectCard__projectname'>{name}</h4>
            <p className='ProjectCard__caracteristicas'><strong>Características:</strong> {caracteristicas}</p>
            <div className='TarjectCard__contenedor__img'>
                <img className='TarjectCard__img' src={img} />
            </div>
            <div className='TarjectCard__contenedor__tecnologia'>
                {
                    tecnologias.split(",").map((tech:string) => (
                        <span className='TarjectCard__tech'>{tech.trim()}</span>
                    ))
                }
            </div>
            {
                status === "desplegado" ? 
                    accion === "enlace"    
                    ? <span className='ProjectCard__accion' onClick={() => { navigate(enlace) }}>Ver proyecto</span>
                    : <span className='ProjectCard__accion'>Ver video</span>
                : <span className='ProjectCard__accion__dissable'>{status}</span>
            }

        </section>
    );
};

export default ProjectCard;