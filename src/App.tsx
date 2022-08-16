import React, {useEffect, useRef, useState} from 'react';
import './styles/App.css';
import 'normalize.css/normalize.css'
import {useAppDispatch, useAppSelector} from "./app/hooks";
import Weather from "./components/Weather";
import Form from "./components/Form";
import weather from "./components/Weather";


function App() {
    const fiveDaysData = useAppSelector(state => state.fiveDaysWeather)
    const currentData = useAppSelector(state => state.currentWeather)
    const dispatch = useAppDispatch()
    return (
        <div className="App">
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 10, marginBottom: 10,}}>
                <Form/>
            </div>
            <div style={{fontSize: 25, display: 'flex', justifyContent: 'center'}}>
                {currentData.name?.length !== 0
                    ?
                    <p>{currentData.name}</p>
                    :
                    <p>{fiveDaysData.city!.name}</p>

                }
            </div>
            <div style={{display: 'flex', gap: 10, padding: '15px 10px', flexWrap: 'wrap', justifyContent: 'center'}}>
                {currentData.weather.map((weather, i) => (
                    <Weather key={i} img={weather.icon} temp={currentData.main!.temp} temp_min={currentData.main!.temp_min}
                             date={currentData.dt!} city={currentData.name}/>
                ))}
                {fiveDaysData.list?.map((list, i) => (
                    list.weather.map(weather => (
                        <Weather key={i} img={weather.icon} temp={list.main.temp} temp_min={list.main.temp_min}
                                 date={list.dt_txt!}/>
                    ))
                ))
                }


            </div>
        </div>
    );
}

export default App;
