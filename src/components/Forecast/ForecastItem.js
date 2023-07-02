import React from "react";
import Temperature from "../CurrentWeather/Temperature";
import WeatherIcon from "../CurrentWeather/WeatherIcon";
import { ForecastItemContainer } from "./styled";

const ForecastItem = (props) => {
  return (
    <ForecastItemContainer>
      <h6>{props.day}</h6>
      <WeatherIcon code={props.weatherCode} />
      <p>{props.main}</p>
      <span>
        <Temperature value={props.high} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={props.low} />
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  );
};

export default ForecastItem;
