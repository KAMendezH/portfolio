import { create } from "zustand";
// TYPES
interface TypeModalServiciosStore{
    statusModal: boolean,
    seccion: string,
    setSeccion: (data:string) => void,
    openModal: () => void,
    closeModal: () => void,
};
const useModalSeriviciosStore = create<TypeModalServiciosStore>((set)=>({
    statusModal: false,
    seccion: "Desarrollo Web",
    setSeccion: (data)=> set({seccion: data}),
    openModal: () => set({statusModal: true}),
    closeModal: () => set({statusModal: false}),
}));


export default useModalSeriviciosStore;