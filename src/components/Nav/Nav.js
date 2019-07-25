import React from 'react';

import ArrowButton from './ArrowButton/ArrowButton';

import './Nav.scss';

const nav = props => (
    <div className="nav">
        <ArrowButton clicked={props.slideBoxesBack}/>
        <ArrowButton right clicked={props.slideBoxes} />
    </div>
);

export default nav;