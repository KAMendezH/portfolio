import { create } from "zustand";

// TYPES
interface useFiltrosStoreType{
    allFilters: string[],
    filtersActive: string[],
    toggleFilter: (tech:string) => void,
    resetFiltersActive: () => void,
}

const useFiltrosStore = create<useFiltrosStoreType>((set, get) => ({
    allFilters: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python", "Supabase", "JSX"],
    filtersActive: [],
    toggleFilter: (tech: string) => {
        const current = get().filtersActive;
        if (current.includes(tech)) {
            set({ filtersActive: current.filter(item => item !== tech) });
        } else {
            set({ filtersActive: [...current, tech] });
        }
    },
    resetFiltersActive: () => set({ filtersActive: [] }),
}));


export default useFiltrosStore;