import Styles from './CurrentLocation.module.css'
import { useContext } from 'react'
import { WeatherContext } from '../../context/weatherContext'

const CurrentLocation = () => {

    const { actualTimeValues } = useContext(WeatherContext)

    return(
        <section className={Styles.locationComponent}>
            <img className={Styles.locationIcon} src="./public/current location icon.png" alt="Current Location" />
            <p className={Styles.locationText}>{actualTimeValues.city}</p>
        </section>
    )
}

export default CurrentLocation