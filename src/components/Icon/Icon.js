import React from 'react';

const icon = props => (
    <img 
        className={props.className} 
        src={props.src} 
        alt={`icon ${props.className}`} 
        onClick={props.clicked}
    />
);

export default icon;