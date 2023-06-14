// projectStore.js
import {create} from 'zustand';

const useProjectStore = create((set) => ({
  projects: [],
  setProjects: (data) => set(() => ({ projects:data })),
}));

export default useProjectStore;
