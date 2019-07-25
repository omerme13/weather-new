import React from 'react'

import searchIcon from '../img/Rectangle2.svg';
import Icon from './Icon/Icon';

import './SearchBox.scss';

const searchBox = () => (  
    <div className="search-box">
        <div className="search-box__container">
            <Icon className ="search-box__icon" src={searchIcon} />
            <input 
                className="search-box__input" 
                type="text" 
                placeholder="Search another city" 
            />
        </div>
    </div>
)

export default searchBox;