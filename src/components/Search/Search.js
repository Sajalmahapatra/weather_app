import React, { useState } from "react";
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
} from "./styled";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  let timer;
  const [search, setSearch] = useState("");


  const handleChange = (e) => {
    const { value } = e.target;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearch(value);
    }, 300);
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
  };
  return (
    <SearchElement>
      <SearchIcon />
      <SearchInput onChange={handleChange} />
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }}
      >
        <LocationIcon />
      </LocationButton>
    </SearchElement>
  );
};

export default Search;
