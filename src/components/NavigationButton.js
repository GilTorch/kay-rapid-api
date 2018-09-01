import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationButton=({name,iconName})=>{
    return(
        <button className="navigation-button">
            <FontAwesomeIcon icon={iconName} size="2x"/>
            <span className="navigation-button__title">{name}</span>
        </button>
    )
}

export default NavigationButton;