import React, { memo, useEffect } from "react";
import {
  CurrentWeatherContainer,
  CurrentWeatherStatus,
  SectionTitle,
  WeatherContainer,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeTempUnit } from "../../store/reducers/appReducer";
import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
// import { changeTempUnit } from '../../store/reducers/appReducer';

const CurrentWeather = () => {
  const { weather, degreeType, isInitial, isError } = useSelector((store) => {
    const weather = store.weather.weatherData;
    const degreeType = store.app.tempUnit;
    const isInitial = store.app.isInitial;
    const isError = store.weather.isError;
    return { weather, degreeType, isInitial, isError };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log("Cannot load weather for this place");
    }
  }, [isError]);
  if (isInitial) return <></>;
  return (
    <WeatherContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SectionTitle>Current Weather</SectionTitle>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
        </div>
      </div>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <h4>{weather.name}</h4>
          <div style={{ display: "flex" }}>
            <WeatherIcon code={weather.weather.id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{weather.weather.description}</h6>
        </CurrentWeatherStatus>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default memo(CurrentWeather);
