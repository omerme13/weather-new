import React from 'react';

import ArrowButton from './ArrowButton/ArrowButton';

import './Nav.scss';

const nav = props => {
    let arrowButton = null;
    let c = null;

    if (props.show === "first") {
        arrowButton = <ArrowButton right clicked={props.displaySecondPart} />;
    } else {
        arrowButton = <ArrowButton clicked={props.displayFirstPart} />
        c = "move";
    }

    return (
        <div className={`nav ${c}`}>
            {arrowButton} 
        </div>
    );
};

export default nav;