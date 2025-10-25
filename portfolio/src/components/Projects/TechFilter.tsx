// CSS
import './CSS/TechFilter.css'

// ELEMENTS
import FilterTarget from "./FilterTarget";

function TechFilter(){
    return(
        <section className="TechFilter__content">
            <FilterTarget filterName="All" />
            <FilterTarget filterName="HTML" />
            <FilterTarget filterName="CSS" />
            <FilterTarget filterName="JavaScript" />
            <FilterTarget filterName="React" />
            <FilterTarget filterName="TypeScript" />
            <FilterTarget filterName="Python" />
            <FilterTarget filterName="Supabase" />
            <FilterTarget filterName="JSX" />
        </section>
    );
};

export default TechFilter;