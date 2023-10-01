import Styles from './SingleDayForecast.module.css'

const SingleDayForecast = ({ icon, temperature, date }) => {

    const IconToUse = ({ icon }) => {

        if(icon==='Rain') {
            return(
                <img src='./public/drizzle 1.png' alt='weather icon' />
            )
        } else if (icon==='Snow') {
            return(
                <img src='./public/rain 1.png' alt='weather icon' />
            )
        } else if (icon==='Clouds') {
            return(
                <img src='./public/clouds 1.png' alt='weather icon' />
            )
        } else {
            return(
                <img src='./public/clear 2.png' alt='weather icon' />
            )
        }
    }


    return(
        <div className={Styles.singleDayForecastComponent}>
            <IconToUse icon={icon}/>
            <p className={Styles.temperature}>{temperature}</p>
            <p className={Styles.date}>{date}</p>
        </div>
    )
}

export default SingleDayForecast