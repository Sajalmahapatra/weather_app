import React from "react";
import Spinner from "../components/ui/Spinner/Spinner";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import { useSelector } from "react-redux";

const Home = () => {
  const loading = useSelector((state) => state.app.isLoading);
  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <CurrentWeather />
      <Footer />
    </>
  );
};

export default Home;
