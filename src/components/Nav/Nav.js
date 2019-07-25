import React from 'react';

import ArrowButton from './ArrowButton/ArrowButton';

import './Nav.scss';

const nav = props => (
    <div className="nav">
        <ArrowButton />
        <ArrowButton right />
    </div>
);

export default nav;