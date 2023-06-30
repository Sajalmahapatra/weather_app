import { createSlice } from "@reduxjs/toolkit";
import { TempUnit } from "../../utils/unitConversion";

const initialState = {
  tempUnit: TempUnit.CELCIUS,
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
    changeTempUnit: (state) => {
      state.tempUnit =
        state.tempUnit === TempUnit.CELCIUS
          ? TempUnit.FAHRENHEIT
          : TempUnit.CELCIUS;
    },
    setIsInitial: (state, action) => {
      state.isInitial = action.payload;
    },
  },
});
export const { toggleDarkMode, setIsLoading, changeTempUnit, setIsInitial } =
  appSlice.actions;
const { reducer } = appSlice;
export default reducer;
