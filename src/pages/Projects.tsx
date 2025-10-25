// CSS
import "./CSS/Projects.css"
// COMPONENTS
import TechFilter from "../components/Projects/TechFilter";
import ProjectCard from "../components/Projects/ProjectCard";


// DATA
import projectsData from "../Data/projects";

// STORES
import useFiltrosStore from "../stores/FiltrosStore";



function Projects(){
    const {filtersActive}= useFiltrosStore();
    console.log("filtros activos: ", filtersActive)
    



    const filteredProjects = filtersActive.length === 0
    ? projectsData
    : projectsData.filter(project => filtersActive.every(tag => project.tecnologias.split(",").map(list => list.trim()).includes(tag)))

    

    return(
        <section className="Projects__content">
            <h1 className="Projects__title">Projects</h1>
            
            <TechFilter />
            
            <div className="Projects__contenedor">
                {
                    
                    filteredProjects.map((item, id) => (
                        <ProjectCard key={id} name={item.name} img={item.img} caracteristicas={item.caracteristicas} tecnologias={item.tecnologias} accion={item.accion} enlace={ item.enlace } status={item.status}/>
                    ))
                    
                }
            </div>
        </section>
    );
};

export default Projects;