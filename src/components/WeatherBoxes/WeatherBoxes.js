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
    return (
        <div className="weather-boxes">
            <TodayBox 
                city={props.city} 
                deg={props.temp}
                cond={props.condition}
            />
            <WeatherBox 
                city={props.city} 
                minTemp={props.minTemp}
                maxTemp={props.maxTemp}
                cond={props.condition}
                icon={props.iconURL}
                day={convertDayToString(props.day)}
            />
            <WeatherBox />
            <WeatherBox />
        </div>
    );
}

export default weatherBoxes;