import React from 'react';

const icon = props => (
    <img 
        className={props.className} 
        src={props.src} 
        alt={`icon ${props.className}`} 
    />
);

export default icon;