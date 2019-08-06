import React from 'react';

import Icon from '../../Icon/Icon';
import arrowIcon from '../../../img/arrow.svg';

import './ArrowButton.scss';

const arrowButton = props => {
    let side = props.right 
        ? "right"
        : "left";

    return (
        <Icon 
            className={`arrow-button arrow-button--${side}`} 
            src={arrowIcon} 
            clicked={props.clicked}
        />
    );
};

export default arrowButton;