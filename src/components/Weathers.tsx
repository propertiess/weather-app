import React, {FC} from 'react';
import Weather from "./Weather";
import {useAppSelector} from "../app/hooks";
import classes from '../stylesModule/Weathers.module.css'
import Loader from "./Loader";

const Weathers: FC = () => {

    const fiveDaysData = useAppSelector(state => state.fiveDaysWeather)
    const currentData = useAppSelector(state => state.currentWeather)

    let day = 0
    if (currentData.loading === 'none' && fiveDaysData.loading !== 'idle') {
        return <></>
    } else if (currentData.loading === 'loading' || fiveDaysData.loading === 'loading') {
        return <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>

    }  else if (currentData.loading === 'failed' || fiveDaysData.loading === 'failed') {
        return <div>{currentData.error?.message}</div>

    }

    return (
        <>
            <div className={classes.row}>
                {currentData.weather.map((weather, i) => {
                    return < Weather
                        desc={weather.description}
                        day={day += 1}
                        key={i}
                        img={weather.icon}
                        temp={currentData.main!.temp}
                        date={currentData.dt!}
                        city={currentData.name}
                    />
                })
                }
                {fiveDaysData.list?.map((list, i) => (
                    list.weather.map(weather => {

                        if (list.dt_txt.substring(11, list.dt_txt.length - 3) === '15:00' && day !== 0) {
                            console.log(list.dt_txt)
                            return <Weather
                                desc={weather.description}
                                day={day += 1}
                                key={i}
                                img={weather.icon}
                                temp={list.main.temp}
                                date={list.dt_txt!}/>
                        }
                        return null;
                    })
                ))
                }
            </div>
        </>
    );
};

export default Weathers;