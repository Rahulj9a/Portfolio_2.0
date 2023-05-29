import { create } from "zustand";

const useLeftSideBar = create((set)=>({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    onToggle:function(){set({isOpen:!(this.isOpen)})}
}))

export default useLeftSideBar