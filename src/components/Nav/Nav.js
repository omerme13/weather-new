import React from 'react';

import ArrowButton from './ArrowButton/ArrowButton';

import './Nav.scss';

const nav = props => (
    <div className="nav">
        <ArrowButton clicked={props.displayFirstPart}/>
        <ArrowButton right clicked={props.displaySecondPart} />
    </div>
);

export default nav;