import React from 'react'


import './TodayBox.scss';

const todayBox = props => {
    return (
        <div className="today-box">
            <div className="today-box__location">{props.city}</div>
            <div className="today-box__day">today</div>
            <div className="today-box__degrees">{props.deg}&deg;</div>
            <div className="today-box__cond">{props.cond}</div>
        </div>
    );
}

export default todayBox;
