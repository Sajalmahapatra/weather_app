import React from 'react'
import Spinner from '../components/ui/Spinner/Spinner'
import Header from '../components/Header'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather'

const Home = () => {
    
  return (
    <>
    {/* <Spinner/> */}
    <Header/>
    <Search/>
    <CurrentWeather/>
    <Footer />
    </>
  )
}

export default Home