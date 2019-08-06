import React from 'react'
import clouds from '../../img/clouds.jpg';
import clear from '../../img/clear.png';
import mist from '../../img/mist.jpg';
import rain from '../../img/rain.jpg';
import snow from '../../img/snow.jpg';
import thunder from '../../img/thunder.jpg';

import './Background.scss';

const getBackgroundImage = condition => {
    switch(condition) {
        case '02':
            return clouds;            
        case '03':
            return clouds;   
        case '04':
            return clouds;   
        case '09':
            return rain;   
        case '10':
            return rain;   
        case '11':
            return thunder;   
        case '13':
            return snow;
        case '50':
            return mist;            
        default:
            return clear;     
    }
}

const background = props => {
    const backImage = getBackgroundImage(props.cond);

    return (
        <div 
            className='background' 
            style={{backgroundImage: 
                `linear-gradient(rgba(0,0,0,0),rgba(0,0,25,0.5)),
                url(${backImage})`
            }}
        >
            {props.children}
        </div>
    );
}

export default background;