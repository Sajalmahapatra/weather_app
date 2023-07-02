import React, { memo, useEffect } from "react";
import {
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  CurrentWeatherStatus,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeTempUnit } from "../../store/reducers/appReducer";
import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import { ReactComponent as HighIcon } from "../../assets/highIcon.svg";
import { ReactComponent as LowIcon } from "../../assets/lowIcon.svg";
import { ReactComponent as HumidityIcon } from "../../assets/humidityIcon.svg";
import { ReactComponent as PressureIcon } from "../../assets/pressureIcon.svg";
import { ReactComponent as WindIcon } from "../../assets/windIcon.svg";
import { TempUnit, kmToMile } from "../../utils/unitConversion";

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
        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Humidity
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Wind
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS
                ? weather.wind.speed
                : kmToMile(weather.wind.speed)}
              {degreeType === TempUnit.CELCIUS ? "kph" : "mph"}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Pressure
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default memo(CurrentWeather);
