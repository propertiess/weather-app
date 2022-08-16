import React, {FC, useContext, useEffect, useState} from 'react';
import styles from './Weather.module.css'
import {useAppDispatch} from "../app/hooks";
import {fetchFiveDaysWeather} from "../features/FiveDaysWeather";
import DetailsContext from "../context/DetailsContext";
import {resetCurrentData} from "../features/CurrentWeather";

interface IWeatherProps {
    date: string | Date
    img: string
    temp: number
    temp_min: number
    city?: string
}

const month = ['Февраля', 'Января', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
const Weather: FC<IWeatherProps> = ({date, temp, temp_min, img, city}) => {
    const [dates, setDates] = useState<string>()
    // const [isFull, setIsFull] = useState(false)
    // const [counter, setCounter] = useState(0)
    const {details, setOpenDetails} = useContext(DetailsContext)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (typeof date === "string") {
            let toDate = new Date(date)
            console.log(date)
            console.log(toDate.getDate() + ' ' + month[toDate.getMonth()])
            setDates(toDate.getDate() + ' ' + month[toDate.getMonth()])
        } else {
            let date = new Date()
            setDates(date.getDate() + ' ' + month[date.getMonth()])

        }

    }, [date])
    const openDetails = async () => {
        try {
            dispatch(resetCurrentData())
            await dispatch(fetchFiveDaysWeather(city!))
            if (!details)
                setOpenDetails(true)
        } catch (e) {
            console.log('fff')
            return (
                <div>Ничего не найдено!</div>
            )
        }
    }


    return (
        <div className={styles.block}>
            <p className={styles.date}>{dates}</p>
            {typeof date === 'string' &&
                <p>{date.substring(11, date.length - 3)}</p>
            }
            <img src={` https://openweathermap.org/img/wn/${img}@2x.png`} alt="213"/>
            <p className={styles.tempNow}>Макс. {Math.floor(temp)} &#8451;</p>
            <p className={styles.tempMin}>Мин. {Math.floor(temp_min)} &#8451;</p>
            {!details &&
                <button className={styles.btn} onClick={openDetails}
                        type={'button'}>Узнать подробнее
                </button>
            }

        </div>
    );
};

export default Weather;