import React, {FC, useContext, useEffect, useState} from 'react';
import styles from '../stylesModule/Weather.module.css'
import {useAppDispatch} from "../app/hooks";
import {fetchFiveDaysWeather} from "../features/FiveDaysWeather";
import DetailsContext from "../context/DetailsContext";
import {motion} from "framer-motion";

interface IWeatherProps {
    date: string | Date
    img: string
    temp: number
    city?: string
    day: number
    desc: string
}

const month = ['фев', 'янв', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

const Weather: FC<IWeatherProps> = ({date, day,temp, img, city, desc}) => {
    const [dates, setDates] = useState<string>()
    const {details, setOpenDetails} = useContext(DetailsContext)

    const dispatch = useAppDispatch()

    const openDetails = () => {
        dispatch(fetchFiveDaysWeather(city!))
        if (!details) {
            setOpenDetails(true)
        }
    }

    useEffect(() => {
        let date = new Date()
        date.setDate(day + date.getDate() - 1)
        setDates((date.getDate() + ' ' + month[date.getMonth()]).toString())
    }, [date, day])

    return (
        <>
            <motion.div className={styles.block}
                        initial={{opacity: 0, scale: 0.5}}
                        transition={{duration: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
            >
                {dates?.trim() &&
                    <p className={styles.date}>{dates}</p>
                }
                <img src={` https://openweathermap.org/img/wn/${img}@2x.png`} alt="213"/>
                <p className={styles.tempNow}>Макс. {Math.floor(temp)} &#8451;</p>
                <p className={styles.condition}>{desc}</p>
                {!details &&
                    <button className={styles.btn} onClick={openDetails}
                            type={'button'}>Прогноз на ближ. дни
                    </button>
                }
            </motion.div>

        </>


    );
};

export default Weather;