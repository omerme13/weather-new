import React from 'react';

import Icon from '../Icon/Icon';
import graphIcon from '../../img/graph.svg';

import './GraphButton.scss';

const graphButton = props => {
    return (
        <Icon 
            className="graph-button" 
            src={graphIcon} 
            clicked={props.clicked}
        />
    );
};

export default graphButton; 