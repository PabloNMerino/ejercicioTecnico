import { useState, useContext } from 'react'
import Styles from './SearchBar.module.css'
import { WeatherContext } from '../../context/weatherContext'

const SearchBar = () => {

    const [city, setCity] = useState('')

    const { changeCity } = useContext(WeatherContext)

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault()
        changeCity(city)
    }

    return(
        <section className={Styles.searchComponent}>
            <form className={Styles.form}>
                <button onClick={handleClick} className={Styles.searchButton}><img className={Styles.icon} src="./public/search 1.png" alt="search icon" /></button>
                <input className={Styles.inputBox} type="text" placeholder="Search for your preffered city..." value={city} onChange={handleCityChange}/>
            </form>
        </section>
    )
}

export default SearchBar