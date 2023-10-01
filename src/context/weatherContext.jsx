import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext()

export const WeatherProvider = (props) => {

    const [city, setCity] = useState('Buenos Aires')
    const [coordinates, setCoordinates] = useState({})
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [forecast, setForecast] = useState({})
    const [weatherData, setWeatherData] = useState({})
    const [actualTempValues, setActualTempValues] = useState({})
    const [daysForecastValues, setDaysForecastValues] = useState({})
    const [hourlyForecastValues, setHourlyForecastValues] = useState({})
    const [actualTimeValues, setActualTimeValues] = useState({})
    const [time, setTime] = useState('')


    const changeCity = (cityName) => {
        setCity(cityName)
    }


    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    useEffect(()=>{
        coordinatesFetch()
    },[city])

    const coordinatesFetch = async() => {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city.replace(/\s+/g, '')}&limit=5&appid=35123866c25eef09a9b185db784d3463`)
        const data = await response.json()
        setCoordinates(data)
    }

    const apiFetch = async() => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=35123866c25eef09a9b185db784d3463&units=metric`)
        const data = await response.json()
        setWeatherData(data)
    }

    const forecastFetch = async() => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=35123866c25eef09a9b185db784d3463&units=metric`)
        const data = await response.json()
        setForecast(data)
    }

    const timeFetch = async() => {
        const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=SABDRETUNMCH&format=json&by=position&lat=${latitude}&lng=${longitude}`)
        const data = await response.json()
        setTime(data)
    }

    useEffect(()=>{
        if(coordinates.length>0) {
        setLatitude(coordinates[0].lat.toFixed(2))
        setLongitude(coordinates[0].lon.toFixed(2))}
    },[coordinates])

    useEffect(()=>{
        if(latitude!=0) {
            apiFetch()
            forecastFetch()
            timeFetch()
        }
    },[latitude])

    useEffect(()=>{
        if(Object.keys(time).length!=0) {
            setActualTimeValues({
                city,
                hour: `${new Date(time.formatted).getHours()}`,
                minutes: `${new Date(time.formatted).getMinutes()}`,
                date: `${daysOfWeek[new Date(weatherData.dt*1000).getDay()]}, ${new Date(weatherData.dt*1000).getDate()} ${months[new Date(weatherData.dt*1000).getMonth()]}`
            })
        }
    },[time])

    useEffect(()=>{
        if(Object.keys(weatherData).length!=0) {
            setActualTempValues({
                temperature: `${weatherData.main.temp.toFixed(0)}°C`,
                feelsLike: `${weatherData.main.feels_like.toFixed(0)}°C`,
                sunrise: `${new Date(weatherData.sys.sunrise*1000).getHours()}:${new Date(weatherData.sys.sunrise*1000).getMinutes()} AM`,
                sunset: `${new Date(weatherData.sys.sunset*1000).getHours()}:${new Date(weatherData.sys.sunset*1000).getMinutes()} PM`,
                title: `${weatherData.weather[0].main}`,
                humidity: `${weatherData.main.humidity}%`,
                windSpeed: `${weatherData.wind.speed.toFixed(0)}km/h`,
                pressure: `${weatherData.main.pressure}hPa`
            });
            
            
        }
    },[weatherData])

    useEffect(()=>{
        if(Object.keys(forecast).length!=0) {
        setDaysForecastValues({
            firstDay: {
                sky: `${forecast.list[2].weather[0].main}`,
                temperature: `${forecast.list[2].main.temp.toFixed(0)}°C`,
                date: `${daysOfWeek[new Date(forecast.list[2].dt_txt).getDay()]}, ${new Date(forecast.list[2].dt_txt).getDate()} ${months[new Date(forecast.list[2].dt_txt).getMonth()]}`
            },
            secondDay: {
                sky: `${forecast.list[10].weather[0].main}`,
                temperature: `${forecast.list[10].main.temp.toFixed(0)}°C`,
                date: `${daysOfWeek[new Date(forecast.list[10].dt_txt).getDay()]}, ${new Date(forecast.list[10].dt_txt).getDate()} ${months[new Date(forecast.list[10].dt_txt).getMonth()]}`
            },
            thirdDay: {
                sky: `${forecast.list[18].weather[0].main}`,
                temperature: `${forecast.list[18].main.temp.toFixed(0)}°C`,
                date: `${daysOfWeek[new Date(forecast.list[18].dt_txt).getDay()]}, ${new Date(forecast.list[18].dt_txt).getDate()} ${months[new Date(forecast.list[18].dt_txt).getMonth()]}`
            },
            fourthDay: {
                sky: `${forecast.list[26].weather[0].main}`,
                temperature: `${forecast.list[26].main.temp.toFixed(0)}°C`,
                date: `${daysOfWeek[new Date(forecast.list[26].dt_txt).getDay()]}, ${new Date(forecast.list[26].dt_txt).getDate()} ${months[new Date(forecast.list[26].dt_txt).getMonth()]}`
            },
            fifthDay: {
                sky: `${forecast.list[34].weather[0].main}`,
                temperature: `${forecast.list[34].main.temp.toFixed(0)}°C`,
                date: `${daysOfWeek[new Date(forecast.list[34].dt_txt).getDay()]}, ${new Date(forecast.list[34].dt_txt).getDate()} ${months[new Date(forecast.list[34].dt_txt).getMonth()]}`
            }
        })

        setHourlyForecastValues({
            firstHour: {
                sky: forecast.list[2].weather[0].main,
                temperature: `${forecast.list[2].main.temp.toFixed(0)}°C`,
                windDirection: forecast.list[2].wind.deg,
                windSpeed: `${forecast.list[2].wind.speed.toFixed(0)}km/h`
            },
            secondHour: {
                sky: forecast.list[3].weather[0].main,
                temperature: `${forecast.list[3].main.temp.toFixed(0)}°C`,
                windDirection: forecast.list[3].wind.deg,
                windSpeed: `${forecast.list[3].wind.speed.toFixed(0)}km/h`
            },
            thirdHour: {
                sky: forecast.list[4].weather[0].main,
                temperature: `${forecast.list[4].main.temp.toFixed(0)}°C`,
                windDirection: forecast.list[4].wind.deg,
                windSpeed: `${forecast.list[4].wind.speed.toFixed(0)}km/h`
            },
            fourthHour: {
                sky: forecast.list[5].weather[0].main,
                temperature: `${forecast.list[5].main.temp.toFixed(0)}°C`,
                windDirection: forecast.list[5].wind.deg,
                windSpeed: `${forecast.list[5].wind.speed.toFixed(0)}km/h`
            },
            fifthHour: {
                sky: forecast.list[6].weather[0].main,
                temperature: `${forecast.list[6].main.temp.toFixed(0)}°C`,
                windDirection: forecast.list[6].wind.deg,
                windSpeed: `${forecast.list[6].wind.speed.toFixed(0)}km/h`
            },

        })
        }
      },[forecast])



    return(
        <WeatherContext.Provider value={{ actualTimeValues, actualTempValues,  daysForecastValues, hourlyForecastValues, changeCity}}>
            {props.children}
        </WeatherContext.Provider>
    )
}