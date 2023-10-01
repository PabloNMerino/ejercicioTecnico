import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import CurrentLocation from './components/currentLocation/CurrentLocation'
import ActualTime from './components/actualTime/ActualTime'
import ActualTemp from './components/actualTemp/ActualTemp'
import DaysForecast from './components/daysForecast/DaysForecast'
import HourlyForecast from './components/hourlyForecast/HourlyForecast'

function App() {
/*
  const [forecast, setForecast] = useState({})


  useEffect(()=>{

    forecastFetch()
  }, [])


  const forecastFetch = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=-34.61&lon=-58.37&appid=35123866c25eef09a9b185db784d3463&units=metric`)
    const data = await response.json()
    setForecast(data)
  }


  useEffect(()=>{
    console.log(forecast);
  },[forecast])


*/

  return (
    <section  className='body'>
      <div className='searchLocation'>
        <SearchBar />
        <CurrentLocation />
      </div>
      <div className='todayData'>
        <ActualTime />
        <ActualTemp />
      </div>
      <div className='forecast'>
        <DaysForecast/>
        <HourlyForecast />
      </div>
    </section>
  )
}


export default App
