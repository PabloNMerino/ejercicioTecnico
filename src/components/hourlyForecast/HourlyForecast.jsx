import Styles from './HourlyForecast.module.css'
import SingleHourForecast from './singleHourForecast/SingleHourForecast'
import { useContext } from 'react'
import { WeatherContext } from '../../context/weatherContext'

const HourlyForecast = () => {

    const { hourlyForecastValues } = useContext(WeatherContext)

    const arrayHourlyForecast = [
        {
            time: '12:00',
            icon: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.firstHour.sky}` : 'Cargando'}`,
            temperature:`${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.firstHour.temperature}` : 'Cargando'}`,
            speed: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.firstHour.windSpeed}` : 'Cargando'}`,
            direction: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.firstHour.windDirection}` : 'Cargando'}`,
        },
        {
            time: '15:00',
            icon: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.secondHour.sky}` : 'Cargando'}`,
            temperature: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.secondHour.temperature}` : 'Cargando'}`,
            speed: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.secondHour.windSpeed}` : 'Cargando'}`,
            direction: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.secondHour.windDirection}` : 'Cargando'}`,
        },
        {
            time: '18:00',
            icon: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.thirdHour.sky}` : 'Cargando'}`,
            temperature: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.thirdHour.temperature}` : 'Cargando'}`,
            speed: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.thirdHour.windSpeed}` : 'Cargando'}`,
            direction: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.thirdHour.windDirection}` : 'Cargando'}`,
        },
        {
            time: '21:00',
            icon: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fourthHour.sky}` : 'Cargando'}`,
            temperature: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fourthHour.temperature}` : 'Cargando'}`,
            speed: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fourthHour.windSpeed}` : 'Cargando'}`,
            direction: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fourthHour.windDirection}` : 'Cargando'}`,
        },
        {
            time: '00:00',
            icon: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fifthHour.sky}` : 'Cargando'}`,
            temperature: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fifthHour.temperature}` : 'Cargando'}`,
            speed: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fifthHour.windSpeed}` : 'Cargando'}`,
            direction: `${Object.keys(hourlyForecastValues).length>0? `${hourlyForecastValues.fifthHour.windDirection}` : 'Cargando'}`,
        }
    ]

    return(
        <section className={Styles.hourlyForecastComponent}> 
            <p className={Styles.hourlyForecastTitle}>Hourly Forecast:</p>
            <article className={Styles.forecastBoxes}>
                {
                    arrayHourlyForecast.map(hour => {
                        return(
                            <SingleHourForecast key={hour.time} time={hour.time} icon={hour.icon} temperature={hour.temperature} speed={hour.speed} direction={hour.direction}/>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default HourlyForecast