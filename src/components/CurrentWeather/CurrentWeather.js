import React from "react";
import {
  CurrentWeatherContainer,
  CurrentWeatherStatus,
  SectionTitle,
  WeatherContainer,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeTempUnit } from "../../store/reducers/appReducer";
import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
// import { changeTempUnit } from '../../store/reducers/appReducer';

const CurrentWeather = () => {
  const darkMode = useSelector((state) => console.log(state));
  const dispatch = useDispatch();
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

        </CurrentWeatherStatus>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default CurrentWeather;
