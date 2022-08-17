import React from 'react';
import {useAppSelector} from "../app/hooks";
import classes from '../stylesModule/City.module.css'
const City = () => {
    const currentData = useAppSelector(state => state.currentWeather)
    return (
        <div className={classes.city}>
            {currentData.name &&
                <p>{currentData.name}</p>
            }
        </div>
    );
};

export default City;