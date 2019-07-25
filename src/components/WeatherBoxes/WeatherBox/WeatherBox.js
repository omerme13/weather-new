import React from 'react'

import Icon from '../../Icon/Icon';

import './WeatherBox.scss';

const weatherBox = props => {
    return (
        <div className={`weather-box ${props.class}`}>
            <div className="weather-box__day">{props.day}</div>
            <Icon className="weather-box__icon" src={props.icon} />
            <div className="weather-box__degrees">
                {props.minTemp}&deg;/{props.maxTemp}&deg;
            </div>
            <div className="weather-box__cond">{props.cond}</div>
        </div>
    );
}

export default weatherBox;