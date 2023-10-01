import Styles from './ActualTime.module.css'
import { useContext } from 'react'
import { WeatherContext } from '../../context/weatherContext'

const ActualTime = () => {

    const { actualTimeValues } = useContext(WeatherContext)



    return(
        <section className={Styles.actualTimeComponent}>
            <p className={Styles.city}>{actualTimeValues.city}</p>
            
                {
                    Object.keys(actualTimeValues).length>0? <p className={Styles.time}>{(actualTimeValues.hour.length===1? `0${actualTimeValues.hour}`: actualTimeValues.hour)}:{(actualTimeValues.minutes.length===1? `0${actualTimeValues.minutes}` : actualTimeValues.minutes)}</p>: <p className={Styles.loading}>Cargando</p>
                }
            <p className={Styles.date}>{actualTimeValues.date}</p>
        </section>
    )
}

export default ActualTime