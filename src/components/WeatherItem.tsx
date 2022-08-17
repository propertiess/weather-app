import React, {FC, useContext, useEffect, useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import DetailsContext from "../context/DetailsContext";
import {motion} from "framer-motion";
import '../styles/WeatherItem.css'

interface IWeatherProps {
    date: string | Date
    img: string
    temp: number
    city?: string
    day: number
    desc: string
}

const month = ['фев', 'янв', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
const DAY = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

const WeatherItem: FC<IWeatherProps> = ({date, day, temp, img, city, desc}) => {
    const [dates, setDates] = useState<string>()

    const {details} = useContext(DetailsContext)

    const dispatch = useAppDispatch()
    const [days, setDays] = useState<string>('')

    let weightWeather = day === 1 && !details ? ' block_weight' : ''
    let visibleCondition = day === 1 && !details ? ' condition_on' : ''

    useEffect(() => {
        let date = new Date()
        date.setDate(day + date.getDate() - 1)
        setDays(DAY[date.getDay()])
        setDates((date.getDate() + ' ' + month[date.getMonth()]).toString())
    }, [date, day])

    return (
        <>
            <motion.div className={'block' + weightWeather}
                        initial={{opacity: 0, scale: 0.5}}
                        transition={{duration: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
            >
                <p className={'days'}>{days}</p>
                {dates?.trim() &&
                    <p className={'date'}>{dates}</p>
                }
                <img className={'img'} src={` https://openweathermap.org/img/wn/${img}@2x.png`} alt="213"/>
                <p className={'tempNow'}>{Math.floor(temp)} &#8451;</p>
                <p className={'condition' + visibleCondition}>{desc}</p>

            </motion.div>

        </>


    );
};

export default WeatherItem;