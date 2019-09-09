import React from 'react'

import WeatherBox from './WeatherBox/WeatherBox';
import TodayBox from '../WeatherBoxes/TodayBox/TodayBox';

import {convertDayToString}  from '../../shared';

import './WeatherBoxes.scss';

const weatherBoxes = props => {
    const updatedData = [...props.data];
    const todayData = updatedData.shift();

    return (
        <div className={`weather-boxes ${props.class}`}>
            <TodayBox 
                clicked={props.clicked}
                city={props.city} 
                country={props.country} 
                deg={todayData.temp}
                cond={todayData.condition}
                humidity={todayData.humidity}
            />
            {updatedData.map(box => (
                <WeatherBox 
                    key={box.day}
                    minTemp={box.tempMin}
                    maxTemp={box.tempMax}
                    cond={box.condition}
                    icon={box.iconURL}
                    day={convertDayToString(box.day)}
                    class={props.changeDays}
                />
            ))}
        </div>
    );
}

export default weatherBoxes;