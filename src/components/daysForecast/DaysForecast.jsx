import Styles from './DaysForecast.module.css'
import SingleDayForecast from './singleDayForecast/SingleDayForecast'
import { useContext, useState } from 'react'
import { WeatherContext } from '../../context/weatherContext'

const DaysForecast = () => {

    const { daysForecastValues } = useContext(WeatherContext)

    const arrayDaysForecast = [
        {   
            id:1,
            icon: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.firstDay.sky}`: 'Cargando'}`,
            temperature: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.firstDay.temperature}`: 'Cargando'}`,
            date: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.firstDay.date}`: 'Cargando'}`
        },
        {
            id:2,
            icon:  `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.secondDay.sky}`: 'Cargando'}`,
            temperature: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.secondDay.temperature}`: 'Cargando'}`,
            date: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.secondDay.date}`: 'Cargando'}`
        },
        {
            id:3,
            icon: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.thirdDay.sky}`: 'Cargando'}`,
            temperature: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.thirdDay.temperature}`: 'Cargando'}`,
            date: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.thirdDay.date}`: 'Cargando'}`
        },
        {
            id:4,
            icon: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.fourthDay.sky}`: 'Cargando'}`,
            temperature: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.fourthDay.temperature}`: 'Cargando'}`,
            date: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.fourthDay.date}`: 'Cargando'}`
        },
        {
            id:5,
            icon: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.fifthDay.sky}`: 'Cargando'}`,
            temperature: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.fifthDay.temperature}`: 'Cargando'}`,
            date: `${Object.keys(daysForecastValues).length>0? `${daysForecastValues.fifthDay.date}`: 'Cargando'}`
        },
    ]

    return(
        <section className={Styles.daysForecastComponent}>
            <p className={Styles.titleDaysForecast}>5 Days Forecast:</p>
            <article>
                {
                arrayDaysForecast.map(day=>{
                    return(
                        <SingleDayForecast key={day.id} icon={day.icon} temperature={day.temperature} date={day.date}/>
                    )
                })
                }
            </article>  
        </section>
    )
}

export default DaysForecast