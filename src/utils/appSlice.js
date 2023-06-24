import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleSideBar(state) {
      state.isOpen = !state.isOpen;
    },
    closeSideBar(state) {
      state.isOpen = false;
    },
  },
});

export const { toggleSideBar, closeSideBar } = appSlice.actions;
export default appSlice.reducer;
