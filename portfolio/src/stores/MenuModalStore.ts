import { create } from 'zustand';

interface MenuModal{
    modalStatus: boolean,
    openModal: () => void,
    closeModal: () => void
}


const useMenuModal = create<MenuModal>(set => ({
    modalStatus: false,
    openModal: () => set({modalStatus: true}),
    closeModal: () => set({modalStatus: false})
}));

export default useMenuModal;