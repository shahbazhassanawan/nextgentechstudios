import { create } from 'zustand';

const appStore = create((set) => ({
  showScroll: false,
  // toggleScroll: () => set((state) => ({ showScroll: !state.showScroll })),
  setScroll: (value) => set({ showScroll: value }),
}));

export default appStore;
