import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: true
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { toggleSidebar } = sidebarSlice.actions;
export const selectSidebarState = (state: { sidebar: SidebarState }) =>
  state.sidebar;
export default sidebarSlice.reducer;
