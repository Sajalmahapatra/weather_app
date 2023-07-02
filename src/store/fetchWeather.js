import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsInitial, setIsLoading } from "./reducers/appReducer";
import { fetchExtendedForecastData, fetchWeatherData } from "../api/weather";
import { kelvinToCelcius } from "../utils/unitConversion";
import { getNextSevenDays } from "../utils/dateUtils";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { dispatch, rejectWithValue, fulfillWithValue }) => {
    dispatch(setIsLoading(true));
    try {
      const response = await Promise.all([fetchWeatherData(city), fetchExtendedForecastData(city)]);
      console.log("🚀 ~ file: fetchWeather.js:11 ~ response:", response)
      dispatch(setIsLoading(false));
      if (response[0].cod === 200) {
        dispatch(setIsInitial(false));
        return response;
      }
      return rejectWithValue(response[0].message);
      return response
    } catch (error) {
      dispatch(setIsLoading(false));
      return rejectWithValue("Error");
    }
  }
);
export const transformWeatherData = (res) => {
  const weather = res[0];
  const forecast = [];

  weather.weather = res[0].weather[0];
  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
    feels_like: kelvinToCelcius(weather.main.feels_like),
    temp_max: kelvinToCelcius(weather.main.temp_max),
    temp_min: kelvinToCelcius(weather.main.temp_min),
  };
  weather.wind.speed = Math.round(weather.wind.speed * 3.6);

  const next7Days = getNextSevenDays();

  res?.[1] && res[1]?.list && res[1].list.forEach((i, index) => {
    forecast.push({
      day: next7Days[index],
      temp: {
        temp_max: kelvinToCelcius(i.temp.max),
        temp_min: kelvinToCelcius(i.temp.min),
      },
      weather: {
        id: i.weather[0].id,
        main: i.weather[0].main,
      },
    });
  });

  return {
    weather,
    forecast,
  };
};