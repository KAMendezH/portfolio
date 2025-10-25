// CSS
import "./CSS/FilterTarget.css"
// STORES
import useFiltrosStore from "../../stores/FiltrosStore";

// TYPES
interface FilterTargetProps{
    filterName: string
}


function FilterTarget({ filterName }:FilterTargetProps){
    const { filtersActive, toggleFilter, resetFiltersActive } = useFiltrosStore();

    const isActive = filterName === "All"
    ? filtersActive.length === 0
    : filtersActive.includes(filterName);


    return(
        <span onClick={ () => { filterName === "All" ? resetFiltersActive() : toggleFilter(filterName); } }   className={`FilterTarget__content ${isActive ? "FilterTarget__content--active" : ""}`}>
            <p >{filterName}</p>
        </span>
    );
};

export default FilterTarget;