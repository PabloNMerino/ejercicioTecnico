import Styles from './ActualTemp.module.css'
import Feature from './feature/Feature'
import { useContext } from 'react'
import { WeatherContext } from '../../context/weatherContext'

const ActualTemp = () => {

    const { actualTempValues } = useContext(WeatherContext)

    const featureArray = [
        {
            image: './public/humidity 1.png',
            value: `${actualTempValues.humidity}`,
            title: 'Humidity'
        },
        {
            image: './public/wind 1.png',
            value: `${actualTempValues.windSpeed}`,
            title: 'Wind Speed'
        },
        {
            image: './public/pressure-white 1.png',
            value: `${actualTempValues.pressure}`,
            title: 'Pressure'
        },
        {
            image: './public/uv-white 1.png',
            value: '8',
            title: 'UV'
        }
    ]

    const ActualWeather = ({ weatherState }) => {

        if(weatherState==='Rain') {
            return(
                <article className={Styles.iconTitleContainer}>
                    <img className={Styles.iconWeather} src="./public/drizzle 1.png" alt="actual time icon" />
                    <p className={Styles.titleTemp}>Rainy</p>
                </article>
            )
        } else if (weatherState==='Snow') {
            return(
                <article className={Styles.iconTitleContainer}>
                    <img className={Styles.iconWeather} src="./public/rain 1.png" alt="actual time icon" />
                    <p className={Styles.titleTemp}>Snowy</p>
                </article>
            )
        } else if (weatherState==='Clouds') {
            return(
                <article className={Styles.iconTitleContainer}>
                    <img className={Styles.iconWeather} src="./public/clouds 1.png" alt="actual time icon" />
                    <p className={Styles.titleTemp}>Cloudy</p>
                </article>
            )
        } else {
            return(
                <article className={Styles.iconTitleContainer}>
                    <img src="./public/clear 1.png" alt="actual time icon" />
                    <p className={Styles.titleTemp}>Sunny</p>
                </article>
            )
        }
    }
    


    return(
        <section className={Styles.actualTempComponent}>
            <article className={Styles.actualData}>
                {
                    Object.keys(actualTempValues).length>0? <div>
                    <p className={Styles.temperature}>{actualTempValues.temperature}</p>
                    <div className={Styles.thermalSensation}>
                        <p className={Styles.thermalSensationText}>Feels like:</p>
                        <p className={Styles.thermalSensationTemp}>{actualTempValues.feelsLike}</p>
                    </div>
                </div> : <p className={Styles.loading}>Cargando</p>
                }
                
                <div className={Styles.sunriseSunsetContainer}>
                    <div className={Styles.sunrise}>
                        <img src="./public/sunrise-white 1.png" alt="Sunrise" />
                        <div>
                            <p className={Styles.sunText}>Sunrise</p>
                            <p className={Styles.sunTime}>{actualTempValues.sunrise}</p>
                        </div>
                    </div>
                    <div className={Styles.sunset}>
                        <img src="./public/sunset-white 1.png" alt="Sunset" />
                        <div>
                            <p className={Styles.sunText}>Sunset</p>
                            <p className={Styles.sunTime}>{actualTempValues.sunset}</p>
                        </div>
                    </div>
                </div>
            </article>
            <ActualWeather weatherState={actualTempValues.title}/>
            <article className={Styles.featuresContainer}>
                {
                    featureArray.map(feature => {
                        return(
                            <Feature key={feature.title} image={feature.image} value={feature.value} title={feature.title}/>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default ActualTemp