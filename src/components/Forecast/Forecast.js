import React from "react";
import { useSelector } from "react-redux";
import ForecastItem from "./ForecastItem";
import { ForecastContainer, ForecastItems, SectionTitle } from "./styled";

const Forecast = () => {
  const { forecast, isInitial } = useSelector((state) => ({
    loading: state.app.isLoading,
    isInitial: state.app.isInitial,
    forecast: state.weather.extendedWeatherData,
  }));
  console.log("🚀 ~ file: Forecast.js:12 ~ const{forecast,isInitial}=useSelector ~ forecast:", forecast)

  if (isInitial) return <></>;

  return (
    <ForecastContainer>
      <SectionTitle>Extended Forecast</SectionTitle>
      <ForecastItems>
        {forecast.map((item, i) => {
          return (
            <ForecastItem
              key={i}
              day={item.day}
              high={item.temp.temp_max}
              low={item.temp.temp_min}
              weatherCode={item.weather.id}
              main={item.weather.main}
            />
          );
        })}
      </ForecastItems>
    </ForecastContainer>
  );
};

export default Forecast;
