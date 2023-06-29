import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoading } from "./reducers/appReducer";
import { fetchWeatherData } from "../api/weather";

export const fetchWeather = createAsyncThunk(
  "fetchWeatherType",
  async (city, { dispatch, rejectWithValue, fulfillWithValue }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await Promise.all([fetchWeatherData(city)]);
      console.log("🚀 ~ file: fetchWeather.js:11 ~ response:", response)
      dispatch(setIsLoading(false));
      return response
    } catch (error) {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error");
    }
  }
);
