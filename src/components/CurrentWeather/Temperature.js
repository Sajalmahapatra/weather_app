import React from 'react';
import { useSelector } from 'react-redux';
import { celciusToFahrenheit, TempUnit } from '../../utils/unitConversion';


const Temperature = (props) => {
  const degreeType = useSelector((state) =>state.app.tempUnit);

  if (degreeType === TempUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;