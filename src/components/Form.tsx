import React, {useContext, useRef} from 'react';
import {resetData} from "../features/FiveDaysWeather";
import {useAppDispatch} from "../app/hooks";
import styles from './Form.module.css'
import {fetchCurrentWeather} from "../features/CurrentWeather";
import DetailsContext from "../context/DetailsContext";

const Form = () => {
    const ref = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const {setOpenDetails} = useContext(DetailsContext)
    const searchWeather = () => {
        if (ref.current?.value.trim()) {
            dispatch(resetData())
            setOpenDetails(false)
            dispatch(fetchCurrentWeather(ref.current.value.trim()))
            ref.current.value = ''
        }

    }
    const keyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.code === 'Enter') {
            e.preventDefault()
            searchWeather()

        }
    }
    return (
        <form className={styles.form} onKeyDown={keyDown}>
            <input className={styles.input} ref={ref} placeholder={'Город'}/>
            <button className={styles.btn} onClick={searchWeather} type={'button'}>Искать</button>
        </form>
    );
};

export default Form;