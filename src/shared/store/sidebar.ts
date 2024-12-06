// import { create } from "zustand";

// export const useSideBarOpen = create((set) => ({
//   openSideBar: false,
//   toggleSideBar: () => set((state: openSideBar) => ({ openSideBar: !state.openSideBar })),
// }));

import { create } from "zustand";

interface SideBarState {
  isOpenSideBar: boolean;
  isOpenFilterBar: boolean;
  toggleSideBar: (by: boolean) => void;
  toggleFilterBar: (by: boolean) => void;
}

export const useSideBarOpen = create<SideBarState>()((set) => ({
  isOpenSideBar: false,
  isOpenFilterBar: false,
  toggleSideBar: (by) => set((state) => ({ isOpenSideBar: by })),
  toggleFilterBar: (by) => set((state) => ({ isOpenFilterBar: by })),
}));
