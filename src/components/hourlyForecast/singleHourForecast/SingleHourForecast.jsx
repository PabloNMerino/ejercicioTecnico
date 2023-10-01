import Styles from './SingleHourForecast.module.css'

const SingleHourForecast = ({ time, icon, temperature, speed, direction }) => {

    const IconToUse = ({ icon }) => {

        if(icon==='Rain') {
            return(
                <img className={Styles.biggerIcon} src='./public/drizzle 1.png' alt='weather icon' />
            )
        } else if (icon==='Snow') {
            return(
                <img className={Styles.biggerIcon} src='./public/rain 1.png' alt='weather icon' />
            )
        } else if (icon==='Clouds') {
            return(
                <img src='./public/clouds 2.png' alt='weather icon' />
            )
        } else {
            return(
                <img src='./public/clear 3.png' alt='weather icon' />
            )
        }
    }

    return(
        <div className={Styles.singleHourForecastComponent}>
            <p className={Styles.hour}>{time}</p>
            <IconToUse icon={icon}/>
            <p className={Styles.tempAndSpeed}>{temperature}</p>
            <img src="./public/navigation 1.png" alt="navigation arrow" style={{transform: `rotate(${direction}deg)`}}/>
            <p className={Styles.tempAndSpeed}>{speed}</p>
        </div>
    )
}

export default SingleHourForecast