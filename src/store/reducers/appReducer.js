import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempUnit: "c",
  isLoading: false,
  isInitial: true,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      console.log("state", state);
      localStorage.setItem("darkMode", (!state.darkMode).toString());
      state.darkMode = !state.darkMode;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { toggleDarkMode, setIsLoading } = appSlice.actions;
const { reducer } = appSlice;
export default reducer;
