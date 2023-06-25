import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempUnit:"c",
  isLoading: false,
  isInitial: true,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
});
const { reducer } = appSlice
export default reducer;