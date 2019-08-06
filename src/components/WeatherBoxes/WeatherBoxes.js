import React from 'react'

import WeatherBox from './WeatherBox/WeatherBox';
import TodayBox from '../WeatherBoxes/TodayBox/TodayBox';

import './WeatherBoxes.scss';

const convertDayToString = (day) => {
    switch(day) {
        case 0: 
            return 'Sunday';
        case 1: 
            return 'Monday';    
        case 2: 
            return 'Tuesday';
        case 3: 
            return 'Wednesday';  
        case 4: 
            return 'Thursday';
        case 5: 
            return 'Friday'; 
        default: 
            return 'Saturday'                 
    }
}

const weatherBoxes = props => {
    const updatedData = [...props.data];
    const todayData = updatedData.shift();

    return (
        <div className={`weather-boxes ${props.class}`}>
            <TodayBox 
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