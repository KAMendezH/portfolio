import { create } from 'zustand'

interface StoreMusic {
    status: boolean
    open: ()=>void
    close: ()=>void
}

const useStatusMusic = create<StoreMusic>((set) =>({
    status: false,
    open: () => set({status: true}),
    close: () => set({ status: false })
}));

export default useStatusMusic;