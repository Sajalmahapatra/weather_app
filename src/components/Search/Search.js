import React, { useState } from "react";
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
} from "./styled";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import { fetchCities } from "../../api/placeSuggestion'";

const Search = () => {
  const dispatch = useDispatch();
  let timer;
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // useEffect(() => {
  //   if (!search) {
  //     return;
  //   }
  //   setShowSuggfetchCitiesestions(true);
  //   fetchCities(searchTerm).then((res) => {
  //     setSuggestions(res);
  //   });
  // }, [searchTerm]);
  const handleChange = async (e) => {
    const { value } = e.target;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      if(value.trim()){
        setShowSuggestions(true);
      }
      setSearch(value);
      let vr =  await Promise.all([fetchCities(value)])
       console.log("🚀 ~ file: Search.js:39 ~ handleChange ~ vr:", vr)
    }, 500);
    // fetchCities(value).then((res) => {
    //   console.log("🚀 ~ file: Search.js:37 ~ fetchCities ~ res:", res)
    // })
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    dispatch(
      fetchWeather({
        lat: latitude,
        lng: longitude,
      })
    );
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
