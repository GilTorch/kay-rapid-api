import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationButton=({name,iconName,highlighted})=>{
    return(
        <button className={highlighted?"navigation-button navigation-button--hightlighted":"navigation-button"}>
            <FontAwesomeIcon icon={iconName} size="2x"/>
            <span className="navigation-button__title">{name}</span>
        </button>
    )
}

export default NavigationButton;