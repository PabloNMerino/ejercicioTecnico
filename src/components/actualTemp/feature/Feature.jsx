import Styles from './Feature.module.css'

const Feature = ({ image, value, title }) => {

    return(
        <div className={Styles.feature}>
            <img src={image} alt={title} />
            <p className={Styles.value}>{value}</p>
            <p className={Styles.title}>{title}</p>
        </div>
    )
}

export default Feature